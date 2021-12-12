import AdminProductsGrid from '../components/AdminView/AdminProductsGrid'
import { Navbar } from '../components/Navbar'
import { withApollo } from '../utils/withApollo'

const AdminPanel = () => {
   return (
      <>
         <Navbar title="Olli-wand-er" buttons={false} />
         <AdminProductsGrid />
      </>
   )
}

export default withApollo({ ssr: false })(AdminPanel)
