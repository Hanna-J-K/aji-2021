import AdminProductsGrid from '../components/AdminView/AdminProductsGrid'
import { withApollo } from '../utils/withApollo'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Button, Center } from '@chakra-ui/react'
import { OrdersTable } from '../components/Orders/OrdersTable'

const AdminPanel = () => {
   const [panel, setPanel] = useState(1)
   let adminContent
   let navbarTitle = 'Admin Dashboard'

   const changePanelToProducts = () => {
      setPanel(2)
   }

   const changePanelToOrders = () => {
      setPanel(3)
   }

   if (panel == 2) {
      adminContent = <AdminProductsGrid />
      navbarTitle = 'Admin Products Panel'
   } else if (panel == 3) {
      adminContent = <OrdersTable />
      navbarTitle = 'Admin Orders Panel'
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
         </Center>
         {adminContent}
      </>
   )
}

export default withApollo({ ssr: false })(AdminPanel)
