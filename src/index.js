import './css/style.styl'

console.log('oh oui oui oui c\'est gagné')

if(module.hot)
{
    module.hot.accept()

    module.hot.dispose(() =>
    {
        console.log('disopse')
    })
}