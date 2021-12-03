import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import messaging from '@react-native-firebase/messaging';

import {StackScreenPropsType} from '@models/navigators';

import {executeNotificationData} from '@references/functions/notification-actions';
import {Sentence} from '@references/constants/sentence';
import {Color} from '@references/constants/color';

const Categories = [
  {
    name: 'Living Room',
    plantTotal: 2,
    icon: require('../images/ic_Living_room.png'),
    color: '#EEF7E8',
    iconColor: '#4B8364',
  },
  {
    name: 'Kitchen',
    plantTotal: 1,
    icon: require('../images/ic_Coffee.png'),
    color: '#E6EAFA',
    iconColor: '#5676DC',
  },
  {
    name: 'Drawing Room',
    plantTotal: 2,
    icon: require('../images/ic_Drawing_room.png'),
    color: '#FCF1E3',
    iconColor: '#E6B44C',
  },
  {
    name: 'Backyard',
    plantTotal: 8,
    icon: require('../images/ic_Backyard.png'),
    color: '#F8E8F8',
    iconColor: '#A559D9',
  },
];

const alertToday = [
  {
    image: require('../images/img_thumb1.png'),
    title: 'Water your Cactus today (Living room)',
    message: "It's 2 weeks old, you have to water it twice a week",
  },
  {
    image: require('../images/img_thumb1.png'),
    title: 'Water your Cactus today (Living room)',
    message: "It's 2 weeks old, you have to water it twice a week",
  },
  {
    image: require('../images/img_thumb1.png'),
    title: 'Water your Cactus today (Living room)',
    message: "It's 2 weeks old, you have to water it twice a week",
  },
  {
    image: require('../images/img_thumb1.png'),
    title: 'Water your Cactus today (Living room)',
    message: "It's 2 weeks old, you have to water it twice a week",
  },
];

function Home({navigation, route}: StackScreenPropsType<'Home'>) {
  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          executeNotificationData(remoteMessage.data);
        }
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: Color.white,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: useWindowDimensions().height * 0.1,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: Color.dark,
            }}>
            My Plants
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                marginRight: 26,
              }}>
              <Image source={require('../images/ic_Search.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../images/ic_Add.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: Color.lightGreen,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 26,
              paddingVertical: 12,
            }}>
            <Image source={require('../images/ic_Scan.png')} />
            <Text
              style={{
                color: Color.green,
                marginLeft: 16,
              }}>
              Scan and identify the plant
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 38,
            }}>
            <Text
              style={{
                color: Color.dark,
                fontSize: 18,
                fontWeight: '500',
              }}>
              Popular plants
            </Text>
            <Text
              style={{
                color: Color.green,
                fontWeight: '500',
                fontSize: 12,
                textDecorationLine: 'underline',
              }}>
              view all
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <TouchableOpacity
              style={{
                width: useWindowDimensions().width * 0.43,
                height: 130,
                backgroundColor: '#F8F8F8',
                borderRadius: 12,
                padding: 12,
                paddingTop: 62,
                position: 'relative',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '500',
                      color: Color.green,
                    }}>
                    Fits well
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: Color.dark,
                      width: 89,
                    }}>
                    Paperomia Houseplant
                  </Text>
                </View>
              </View>
              <Image
                style={{
                  position: 'absolute',
                  right: -21,
                  bottom: 10,
                }}
                source={require('../images/img_plant2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: useWindowDimensions().width * 0.43,
                height: 130,
                backgroundColor: '#F8F8F8',
                borderRadius: 12,
                padding: 12,
                paddingTop: 62,
                position: 'relative',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '500',
                      color: Color.green,
                    }}>
                    Fits well
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: Color.dark,
                      width: 89,
                    }}>
                    AnspleniumHouseplant
                  </Text>
                </View>
              </View>
              <Image
                style={{
                  position: 'absolute',
                  right: -21,
                  bottom: 10,
                }}
                source={require('../images/img_plant1.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#D9D9D9',
              marginVertical: 24,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 24,
            }}>
            <Text
              style={{
                color: Color.dark,
                fontSize: 18,
                fontWeight: '500',
              }}>
              Categories
            </Text>
            <Text
              style={{
                color: Color.green,
                fontWeight: '500',
                fontSize: 12,
                textDecorationLine: 'underline',
              }}>
              view all
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {Categories.map(item => {
              return (
                <TouchableOpacity
                  key={item.name}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: useWindowDimensions().width * 0.43,
                    marginBottom: 22,
                  }}>
                  <View
                    style={{
                      height: 35,
                      borderLeftWidth: 1.5,
                      borderLeftColor: item.iconColor,
                    }}></View>
                  <View
                    style={{
                      padding: 16,
                      backgroundColor: item.color,
                      borderRadius: 12,
                      marginRight: 14,
                    }}>
                    <Image source={item.icon} />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#628093',
                        fontWeight: '400',
                      }}>{`${item.plantTotal} Plants`}</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: Color.dark,
                        marginTop: 4,
                        fontWeight: '500',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#D9D9D9',
              marginVertical: 24,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 24,
            }}>
            <Text
              style={{
                color: Color.dark,
                fontSize: 18,
                fontWeight: '500',
              }}>
              Alert for today
            </Text>
            <Text
              style={{
                color: Color.green,
                fontWeight: '500',
                fontSize: 12,
                textDecorationLine: 'underline',
              }}>
              view all
            </Text>
          </View>
          <View>
            {alertToday.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginBottom: 16,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: useWindowDimensions().width * 0.7,
                    }}>
                    <Image source={item.image} />
                    <View
                      style={{
                        marginLeft: 16,
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: Color.dark,
                          marginBottom: 5,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: 12,
                          color: '#628093',
                        }}>
                        {item.message}
                      </Text>
                    </View>
                  </View>
                  <Image source={require('../images/ic_Arrow.png')} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
