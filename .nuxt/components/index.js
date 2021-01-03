export { default as Hamburger } from '../../components/Hamburger.vue'
export { default as InfoButton } from '../../components/InfoButton.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SandanCard } from '../../components/SandanCard.vue'
export { default as Title } from '../../components/Title.vue'
export { default as Header } from '../../components/header.vue'

export const LazyHamburger = import('../../components/Hamburger.vue' /* webpackChunkName: "components/Hamburger" */).then(c => c.default || c)
export const LazyInfoButton = import('../../components/InfoButton.vue' /* webpackChunkName: "components/InfoButton" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazySandanCard = import('../../components/SandanCard.vue' /* webpackChunkName: "components/SandanCard" */).then(c => c.default || c)
export const LazyTitle = import('../../components/Title.vue' /* webpackChunkName: "components/Title" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
