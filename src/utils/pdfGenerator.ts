import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export interface PDFOptions {
  title: string
  companyName: string
  effectiveDate: string
  documentType: string
  version?: string
}

export async function generatePDF(element: HTMLElement, options: PDFOptions): Promise<void> {
  try {
    // Show loading state
    const loadingElement = document.createElement('div')
    loadingElement.innerHTML = 'Generating PDF...'
    loadingElement.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 20px 40px;
      border-radius: 8px;
      z-index: 10000;
      font-family: Arial, sans-serif;
    `
    document.body.appendChild(loadingElement)

    // Create a temporary container with proper styling for PDF
    const pdfContainer = document.createElement('div')
    pdfContainer.style.cssText = `
      position: absolute;
      left: -9999px;
      top: -9999px;
      width: 210mm;
      max-width: 210mm;
      padding: 20mm;
      font-family: Arial, sans-serif;
      background: white;
      color: black;
      line-height: 1.6;
    `

    // Clone the content
    const contentClone = element.cloneNode(true) as HTMLElement
    
    // Apply PDF-specific styles
    const style = document.createElement('style')
    style.textContent = `
      .pdf-content h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #000;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .pdf-content h2 {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 10px 0;
        color: #000;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
      }
      .pdf-content h3 {
        font-size: 16px;
        font-weight: bold;
        margin: 15px 0 8px 0;
        color: #333;
      }
      .pdf-content p {
        font-size: 12px;
        margin: 8px 0;
        color: #000;
        text-align: justify;
      }
      .pdf-content ul {
        margin: 8px 0;
        padding-left: 20px;
      }
      .pdf-content li {
        font-size: 12px;
        margin: 4px 0;
        color: #000;
      }
      .pdf-content .contact-info {
        background: #f5f5f5;
        padding: 15px;
        border-left: 4px solid #007bff;
        margin: 15px 0;
        border-radius: 4px;
      }
      .pdf-content .contact-info p {
        margin: 5px 0;
        font-weight: normal;
      }
      .pdf-header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #333;
      }
      .pdf-header .company-name {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .pdf-header .document-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
        text-transform: uppercase;
      }
      .pdf-header .effective-date {
        font-size: 12px;
        color: #666;
        margin-bottom: 10px;
      }
      .pdf-footer {
        position: absolute;
        bottom: 10mm;
        left: 20mm;
        right: 20mm;
        text-align: center;
        font-size: 10px;
        color: #666;
        border-top: 1px solid #ccc;
        padding-top: 10px;
      }
    `
    
    pdfContainer.appendChild(style)
    
    // Create header
    const header = document.createElement('div')
    header.className = 'pdf-header'
    header.innerHTML = `
      <div class="company-name">${options.companyName}</div>
      <div class="document-title">${options.documentType}</div>
      <div class="effective-date">Effective: ${options.effectiveDate}</div>
      ${options.version ? `<div class="version-info">Version: ${options.version}</div>` : ''}
    `
    
    // Create content wrapper
    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'pdf-content'
    contentWrapper.appendChild(contentClone)
    
    // Create footer
    const footer = document.createElement('div')
    footer.className = 'pdf-footer'
    footer.innerHTML = `
      <div>${options.companyName} - ${options.documentType}</div>
      <div>Generated on ${new Date().toLocaleDateString()}</div>
    `
    
    pdfContainer.appendChild(header)
    pdfContainer.appendChild(contentWrapper)
    pdfContainer.appendChild(footer)
    
    document.body.appendChild(pdfContainer)

    // Wait for fonts to load
    await new Promise(resolve => setTimeout(resolve, 500))

    // Generate canvas from HTML
    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: pdfContainer.scrollWidth,
      height: pdfContainer.scrollHeight
    })

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const imgWidth = 210
    const pageHeight = 295
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 0

    // Add image to PDF
    pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    // Generate filename
    const filename = `${options.documentType.toLowerCase().replace(/\s+/g, '-')}-${options.effectiveDate.replace(/\s+/g, '-')}.pdf`

    // Download PDF
    pdf.save(filename)

    // Cleanup
    document.body.removeChild(pdfContainer)
    document.body.removeChild(loadingElement)

  } catch (error) {
    console.error('Error generating PDF:', error)
    
    // Remove loading element if it exists
    const loadingElement = document.querySelector('div[style*="position: fixed"]')
    if (loadingElement) {
      document.body.removeChild(loadingElement)
    }
    
    // Show error message
    alert('Failed to generate PDF. Please try again.')
  }
}

export function downloadPolicyPDF(policyId: string, versionId?: string): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      // Get the document content element
      const contentElement = document.querySelector('.document-content') as HTMLElement
      if (!contentElement) {
        throw new Error('Document content not found')
      }

      // Import the store functions
      const { usePolicies } = await import('@/stores/policies')
      const { getPolicy, getCurrentVersion, getPolicyVersion } = usePolicies()
      
      const policy = getPolicy(policyId).value
      if (!policy) {
        throw new Error(`Policy not found: ${policyId}`)
      }

      const version = versionId 
        ? getPolicyVersion(policyId, versionId).value
        : getCurrentVersion(policyId).value

      if (!version) {
        throw new Error(`Policy version not found: ${versionId || 'current'}`)
      }

      const options: PDFOptions = {
        title: policy.title,
        companyName: policy.companyName,
        effectiveDate: version.effectiveDate,
        documentType: policy.documentType,
        version: version.version
      }

      await generatePDF(contentElement, options)
      resolve()
    } catch (error) {
      console.error('PDF generation error:', error)
      reject(error)
    }
  })
}
