import AdminProductsGrid from '../components/AdminView/AdminProductsGrid'
import { withApollo } from '../utils/withApollo'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Button, Center } from '@chakra-ui/react'
import { OrdersTable } from '../components/Orders/OrdersTable'
import { useIsAuth } from '../utils/useIsAuth'

const AdminPanel: React.FC<{}> = () => {
   useIsAuth()
   const [panel, setPanel] = useState(1)
   let adminContent
   let navbarTitle = 'Admin Dashboard'

   const changePanelToProducts = () => {
      setPanel(2)
   }

   const changePanelToOrders = () => {
      setPanel(3)
   }
   const changePanelToOrdersFilter = () => {
      setPanel(4)
   }

   if (panel == 2) {
      adminContent = <AdminProductsGrid />
      navbarTitle = 'Admin Products Panel'
   } else if (panel == 3) {
      adminContent = <OrdersTable filter={false} />
      navbarTitle = 'Admin Orders Panel'
   } else if (panel == 4) {
      adminContent = <OrdersTable filter={true} />
      navbarTitle = 'Orders By Status'
   } else {
      adminContent = <></>
      navbarTitle = 'Admin Dashboard'
   }

   return (
      <>
         <Navbar title={navbarTitle} buttons={false} />
         <Center>
            <Button
               m={5}
               onClick={changePanelToProducts}
               variant="magic-navbar"
            >
               Products Panel
            </Button>
            <Button onClick={changePanelToOrders} variant="magic-navbar">
               Orders Panel
            </Button>
            <Button
               m={5}
               onClick={changePanelToOrdersFilter}
               variant="magic-navbar"
            >
               Orders By Status
            </Button>
         </Center>
         {adminContent}
      </>
   )
}

export default withApollo({ ssr: false })(AdminPanel)
