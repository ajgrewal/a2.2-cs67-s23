import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native"; 
import { Stack, useRouter } from "expo-router";
import { Popularjobs, Nearbyjobs } from "../components";

import { COLORS, icons, images, SIZES } from "../constants";
import { 
    NearbyJobs, 
    PopularJobs, 
    ScreenHeaderBtn, 
    Welcome 
} from "../components";

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const handleImageClick = () => {
        router.push("/profile");
    }

    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={handleImageClick} />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() =>{
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
