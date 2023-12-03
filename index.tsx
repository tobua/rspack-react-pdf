import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer'
import { Exmpl, Input } from 'exmpl'
import { Document } from './pdf/Document'
import { Chart } from './chart/Chart'
import alice from './fonts/Alice-Regular.ttf'
import inter from './fonts/Inter-UI-Regular.ttf'
import roboto from './fonts/Roboto-Regular.ttf'

Font.register({ family: 'Alice', src: alice })
Font.register({ family: 'Inter UI', src: inter })
Font.register({ family: 'Roboto', src: roboto })

const App = () => {
  const [title, setTitle] = useState('React-PDF')
  const [screenshot, setScreenshot] = useState(null)

  const page = <Document title={title} screenshot={screenshot} />

  return (
    <Exmpl title="rspack-react-pdf" github="tobua/rspack-react-pdf" npm="@react-pdf/renderer">
      <Input placeholder="Change the Title" value={title} onValue={(title) => setTitle(title)} />
      <br />
      <br />
      <PDFViewer width="100%" height="500">
        {page}
      </PDFViewer>
      <br />
      <br />
      <PDFDownloadLink
        document={page}
        fileName="browser-generated.pdf"
        style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
      >
        {({ loading, error }) =>
          loading ? 'Loading document...' : error ? 'Error generating PDF' : 'Download now!'
        }
      </PDFDownloadLink>
      <p style={{ fontSize: 10 }}>
        Note: Render PDFViewer before PDFDownloadLink, as the other way around it currently fails.
      </p>
      <Chart screenshot={screenshot} onScreenshot={setScreenshot} />
    </Exmpl>
  )
}

createRoot(document.body).render(<App />)
