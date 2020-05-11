import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ActivityIndicator, ImageBackground } from 'react-native'
import { getPhotos } from '../utils/Api'
import { FlatList } from 'react-native-gesture-handler'

console.disableYellowBox = true;

const width = Dimensions.get('window').width;

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        const res = await getPhotos(1580860);
        page === 1 ? setData(res) : setData([...data, ...res])
    }
    useEffect(() => {
        fetchData();
    }, [page])

    const _renderItem = (item) => {
        return (
                <View style={styles.imagContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.urls.regular }}
                    >
                    </Image>
                </View>
        )
    }

    const _footer = () => {
        if (!loading) return null
        return (
            <View
                style={{
                    paddingVertical: 10,
                    // borderTopWidth: 1,
                    // borderColor: "#CED0CE",
                    backgroundColor: '#fafafa',
                }}
            >
                <ActivityIndicator animating size="large" color="#d9d9d9" />
            </View>
        );
    }

    const _loadMore = () => {
        setLoading(true)
        setPage(page + 1)
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            {data.length > 1 ? <FlatList
                data={data}
                renderItem={({ item }) => _renderItem(item)}
                key={item => item.id}
                numColumns={2}
                onEndReached={_loadMore}
                ListFooterComponent={_footer}
                contentContainerStyle={{ borderBottomWidth: 0 }}
            /> : <ActivityIndicator animating size="large" color="#d9d9d9" />
            }
        </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({
    imagContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fafafa',
        elevation: 10,
        borderRadius: 2,
        margin: 10,
        borderWidth: 1
    },

    image: {
        width: width / 2.3, height: width / 2,
        resizeMode: 'cover'
    }
})