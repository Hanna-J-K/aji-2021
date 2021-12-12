import AdminProductsGrid from '../components/AdminView/AdminProductsGrid'
import { withApollo } from '../utils/withApollo'
import { useIsAuth } from '../utils/useIsAuth'

const AdminPanel: React.FC<{}> = () => {
   useIsAuth()
   return (
      <>
         <AdminProductsGrid />
      </>
   )
}

export default withApollo({ ssr: false })(AdminPanel)
