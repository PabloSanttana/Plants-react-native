import * as React from 'react'
import {Text,Image, ScrollView,View ,Dimensions, Animated} from 'react-native'

const {width, height} = Dimensions.get('window')
import styles from './styles'

const scrollimg = new Animated.Value(0)

export default class Carousel  extends React.Component{
    
    state={
        'selectIndex':0
    }
     scrollRef = React.createRef()
     SetSelectIndex = (e) =>{
        const viewSize = e.nativeEvent.layoutMeasurement.width
        const contentOffset = e.nativeEvent.contentOffset.x

        const selectedIndex= Math.floor( contentOffset / viewSize)
        this.setState( {selectIndex:selectedIndex} )
    }
       componentDidMount = ()=>{
        setInterval(()=>{
            this.setState(prev =>({ selectIndex: prev.selectIndex === this.props.images.length -1 ? 0: prev.selectIndex+1}),
            ()=>{
                this.scrollRef.current.scrollTo({
                    animated:true,
                    y:0,
                    x:  (width * this.state.selectIndex)
                })
            }
            )
        },3000)
        }
        render(){
            const {images} = this.props
                return (
                    <View style={styles.container}>
                        <ScrollView style={styles.scroll} 
                            onMomentumScrollEnd={this.SetSelectIndex}
                            ref={this.scrollRef}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            horizontal={true}
                        >
                            {images.map((item, index )=>(
                                <Image source={item} key={index} style={{width, height: height*0.6}} />
                            ))}
                        </ScrollView>
                    <View style={styles.button}>
                        {images.map((item,index)=>(
                            <Text key={index} style={[styles.buttonText, index === this.state.selectIndex? {color:'#0AC4BA'} :{}  ]}>⬤</Text>
                        ))}
                    </View>
                        
                    
                    </View>
            )
        }
}

