import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl, Image, TouchableOpacity, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useCallback, useState } from "react";
import PopularJobCard from '../../components/common/cards/popular/PopularJobCard';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, images, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

import styles from '../../styles/profile';

const ProfilePage = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(
        'search', {
            query : "React Developer",
            num_pages : 1,
    })

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            {/* PROFILE IMAGE */}
            <View style={styles.btnContainer}>
                <Image 
                    source={images.profile}
                    resizeMode='cover'
                    style={styles.btnImg("100%")}
                />
            </View>

            {/* PROFILE INFO */}
            <View style={styles.container}>
                <Text style={styles.welcomeMessage}>John Doe</Text>
                <Text style={styles.userName}>React Native Developer</Text>
            </View>

            {/* JOBS APPLIED */}
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Jobs Applied:</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerBtn}>
                            Show all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardsContainer}>
                    {isLoading ? (
                        <ActivityIndicator size="large" colors={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard 
                            item={item}
                            />

                        )}
                        keyExtractor={item => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                        />
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfilePage;