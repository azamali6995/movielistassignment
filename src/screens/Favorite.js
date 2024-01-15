import {StyleSheet, StatusBar, Text, FlatList, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../component/Header';

const Favorite = props => {
  const {favouriteMovieList} = useSelector(state => state?.todoSlice);
  console.log('favouriteMovieList', favouriteMovieList);
  return (
    <View style={{flex: 1, paddingHorizontal: 8}}>
      <StatusBar
        translucent={true}
        backgroundColor="black"
        barStyle={'dark-content'}
      />
      <Header Left={true} Text={'Favourite Movie'} Right={true} Back={false} />
      <View style={{flex: 1}}>
        {favouriteMovieList.length <= 0 ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Inter-Bold',
              }}>
              No Favourite Move{' '}
            </Text>
          </View>
        ) : (
          <FlatList
            data={favouriteMovieList}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View style={styles.item}>
                <View style={{paddingTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontFamily: 'Inter-',
                        fontWeight: '700',
                        fontSize: 16,
                        paddingHorizontal: 7,
                      }}>
                      Name :
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Inter-',
                        fontWeight: '700',
                        fontSize: 16,
                        paddingHorizontal: 7,
                      }}>
                      {item?.title}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
