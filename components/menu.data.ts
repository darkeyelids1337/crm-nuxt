export interface IMenutItem{
    name: string
    url: string
    icon:string
}

export const MENU_DATA: IMenutItem[] = [
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url:'/'
    },
    {
        icon: 'ep:goods',
        name: 'Products',
        url:'/products'
    },
    {
		name: 'Payments',
		icon: 'ph:contactless-payment',
		url: '/payments',
	},
	{
		name: 'Orders',
		icon: 'fluent:receipt-28-regular',
		url: '/orders',
	},
	{
		name: 'Customers',
		icon: 'mingcute:group-line',
		url: '/customers',
	},
	{
		name: 'Feedback',
		icon: 'fluent:person-feedback-48-regular',
		url: '/feedback',
	},
	{
		name: 'Settings',
		icon: 'radix-icons:gear',
		url: '/settings',
	},
	{
		name: 'Help center',
		icon: 'radix-icons:question-mark',
		url: '/help',
	},
    
]