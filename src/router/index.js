/**
 * Created by georgeRen on 2018/5/3.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = (resolve) => {
  import
    ('@/components/Index').then((module) => {
    resolve(module)
  })
}

const Detail = (resolve) => {
  import('@/components/Detail/Detail').then((module) => {
    resolve(module)
  })
}

const Category = (resolve) => {
  import('@/components/category/Category').then((module) => {
    resolve(module)
  })
}

const Cart = (resolve) => {
  import('@/components/cart/Cart').then((module) => {
    resolve(module)
  })
}

const Member = (resolve) => {
  import('@/components/member/Member').then((module) => {
    resolve(module)
  })
}

const Info = (resolve) => {
  import('@/components/member/Info').then((module) => {
    resolve(module)
  })
}

const Order = (resolve) => {
  import('@/components/order/Order').then((module) => {
    resolve(module)
  })
}

const Address = (resolve) => {
  import('@/components/address/Address').then((module) => {
    resolve(module)
  })
}

const WaitPay = (resolve) => {
  import('@/components/order/WaitPay').then((module) => {
    resolve(module)
  })
}

const WaitDeliver = (resolve) => {
  import('@/components/order/WaitDeliver').then((module) => {
    resolve(module)
  })
}

const WaitReceive = (resolve) => {
  import('@/components/order/WaitReceives').then((module) => {
    resolve(module)
  })
}

const OrderDown = (resolve) => {
  import('@/components/order/OrderDown').then((module) => {
    resolve(module)
  })
}

const AddAddress = (resolve) => {
  import('@/components/address/AddAddress').then((module) => {
    resolve(module)
  })
}

const OrderWait = (resolve) => {
  import('@/components/order/OrderWait').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/waitpay',
      component: WaitPay
    },
    {
      path: '/waitdeliver',
      component: WaitDeliver
    },
    {
      path: '/waitreceive',
      component: WaitReceive
    },
    {
      path: '/orderdown',
      component: OrderDown
    },
    {
      path: '/addaddress',
      component: AddAddress
    },
    {
      path: '/orderwait',
      component: OrderWait
    }
  ]
})
