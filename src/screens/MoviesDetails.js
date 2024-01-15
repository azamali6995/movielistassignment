import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../component/Header';
import Button from '../component/Button';
import { addFavouriteMovieList, todoSlice } from '../redux/slices/favouriteSlice';
import { useSelector, useDispatch } from "react-redux";


const MoviesDetails = (props) => {
  const {navigation, route } = props
  const dispatch = useDispatch();


  const handlefavourite =(item)=>{
     dispatch(addFavouriteMovieList(item))
  }
 
  return (
    <View style={{flex: 1, paddingHorizontal:8,}}>
    <StatusBar
      translucent={true}
      backgroundColor="black"
      barStyle={'dark-content'}
    />
     <View>
       <Header Left={true} Text={'Movie Detail'} Right={true} Back={false} />
     </View>
     <View style={{flex:1, paddingHorizontal:16, paddingVertical:10 }}>
      <View style={{flexDirection:"row",}}>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>Name : </Text>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}} >{route?.params?.item?.title}</Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>ID : </Text>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>{route?.params?.item?.id}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>Overview : </Text>
        <View style={{width:'80%', }}>
          <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>{route?.params?.item?.overview}</Text>
        </View>  
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>release_date : </Text>
        <Text style={{fontSize:16,fontWeight:'700', fontFamily:"Inter-Bold"}}>{route?.params?.item?.release_date}</Text>
      </View>

     </View> 

     <Button
          buttonStyle={{borderRadius: 30,
            marginTop: 50,
          }}
          title={'Add to favourite'}
          LIcon={false}
          LIconStyle={{marginLeft: 5}}
          RIcon={false}
          RIconStyle={{marginRight: 5}}
          onPress={() => {handlefavourite(props?.route?.params?.item)}}  
          disabled={false}
          loading={false}
        />

    </View>
  )
}

export default MoviesDetails

const styles = StyleSheet.create({})