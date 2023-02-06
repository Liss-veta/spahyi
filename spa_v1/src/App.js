import HeaderComponent from './components/HeaderComponent.js'
import FooterComponent from './components/FooterComponent.js'

export default{
    template:
    `<HeaderComponent></HeaderComponent>` +
    `<router-view></router-view>` +
    `<FooterComponent></FooterComponent>`,
    components:{
        HeaderComponent,
        FooterComponent
    }
}

