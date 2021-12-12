import AdminProductsGrid from '../components/AdminView/AdminProductsGrid'
import { withApollo } from '../utils/withApollo'

const AdminPanel = () => {
   return (
      <>
         <AdminProductsGrid />
      </>
   )
}

export default withApollo({ ssr: false })(AdminPanel)
