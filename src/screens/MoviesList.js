import {
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {movieSelector, movieList} from '../redux/slices/MovieSlice';
import LoadingPage from '../component/LoadingPage';
import Header from '../component/Header';

const MoviesList = props => {
  const dispatch = useDispatch();
  const {movieListPayload, ismovieListFetching} = useSelector(movieSelector);
  useEffect(() => {
    GetMovieList();
  }, []);

  const GetMovieList = () => {
    dispatch(movieList());
  };

  const handleOrderScreen = item => {
    props.navigation.navigate('MoviesDetails', {item});
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 8}}>
      <StatusBar
        translucent={true}
        backgroundColor="black"
        barStyle={'dark-content'}
      />
      {ismovieListFetching && <LoadingPage />}
      <View>
        <Header Left={false} Text={'Movie List'} Right={true} Back={false} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingVertical: 10}}>
          <FlatList
            data={movieListPayload?.results}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleOrderScreen(item)}
                // style={{ height:176, width:184, margin:8, borderRadius:10, paddingHorizontal:10,paddingVertical:10, backgroundColor:"skyblue"}}
                style={styles.item}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 6,
                    backgroundColor: '#2591CA',
                  }}>
                  <Image
                    source={{uri: item?.poster_path}}
                    style={{height: 200, width: 140, borderRadius: 6}}
                    resizeMode="cover"
                  />
                </View>
                <View style={{paddingTop: 10}}>
                  <View style={{width: '80%'}}>
                    <Text
                      style={{
                        fontFamily: 'Inter-',
                        fontWeight: '700',
                        fontSize: 16,
                        paddingHorizontal: 7,
                      }}>
                      {item?.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Inter-',
                        fontWeight: '700',
                        fontSize: 16,
                        paddingHorizontal: 7,
                      }}>
                      {item?.release_date}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 'auto',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});
