import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from 'react-native-responsive-linechart';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Waves from '../../assets/waves.svg';
import Arrow from '../../assets/arrow_up.svg';
import ArrowD from '../../assets/arrow_down.svg';
import Eye from '../../assets/eye.svg';
import ChartS from '../../assets/chart.svg';
import Filter from '../../assets/filter_list.svg';

const FirstRoute = () => (
  <View style={{marginTop: '5%', flex: 1}}>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
      }}>
      <Text style={[styles.heading, {color: '#8E8E8E'}]}>Name</Text>
      <Text style={[styles.heading, {color: '#8E8E8E'}]}>Hrs</Text>
      <Text style={[styles.heading, {color: '#8E8E8E'}]}>Status</Text>
    </View>
    <View
      style={{
        backgroundColor: '#e1e9ef',
        width: '90%',
        height: 1.5,
        alignSelf: 'center',
        marginVertical: '4%',
      }}
    ></View>

    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
      }}>
      <Text style={[styles.heading, {color: '#7ba8bb', textAlign: 'center'}]}>
        Country 1
      </Text>
      <Text style={[styles.heading, {color: '#8E8E8E', textAlign: 'center'}]}>
        00 hrs
      </Text>
      <View
        style={{
          backgroundColor: '#f7e2bc',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          paddingHorizontal: '4%',
          paddingVertical: '1%',
        }}>
        <ArrowD />
        <Text style={[styles.heading, {color: '#8E8E8E'}]}>2%</Text>
      </View>
    </View>
    <View
      style={{
        backgroundColor: '#e1e9ef',
        width: '90%',
        height: 1.5,
        alignSelf: 'center',
        marginVertical: '4%',
      }}
    ></View>

    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
      }}>
      <Text style={[styles.heading, {color: '#7ba8bb', textAlign: 'center'}]}>
        Country 1
      </Text>
      <Text style={[styles.heading, {color: '#8E8E8E', textAlign: 'center'}]}>
        00 hrs
      </Text>
      <View
        style={{
          backgroundColor: '#b5e1e3',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          paddingHorizontal: '4%',
          paddingVertical: '1%',
        }}>
        <Arrow color="#8E8E8E" />
        <Text style={[styles.heading, {color: '#8E8E8E'}]}>2%</Text>
      </View>
    </View>
    <View
      style={{
        backgroundColor: '#e1e9ef',
        width: '90%',
        height: 1.5,
        alignSelf: 'center',
        marginVertical: '4%',
      }}
    ></View>

    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
      }}>
      <Text style={[styles.heading, {color: '#7ba8bb', textAlign: 'center'}]}>
        Country 1
      </Text>
      <Text style={[styles.heading, {color: '#8E8E8E', textAlign: 'center'}]}>
        00 hrs
      </Text>
      <View
        style={{
          backgroundColor: '#f7e2bc',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          paddingHorizontal: '4%',
          paddingVertical: '1%',
        }}>
        <ArrowD />
        <Text style={[styles.heading, {color: '#8E8E8E'}]}>2%</Text>
      </View>
    </View>
    <View
      style={{
        backgroundColor: '#e1e9ef',
        width: '90%',
        height: 1.5,
        alignSelf: 'center',
        marginVertical: '4%',
      }}
    ></View>

    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
      }}>
      <Text style={[styles.heading, {color: '#7ba8bb', textAlign: 'center'}]}>
        Country 1
      </Text>
      <Text style={[styles.heading, {color: '#8E8E8E', textAlign: 'center'}]}>
        00 hrs
      </Text>
      <View
        style={{
          backgroundColor: '#f7e2bc',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          paddingHorizontal: '4%',
          paddingVertical: '1%',
        }}>
        <ArrowD />
        <Text style={[styles.heading, {color: '#8E8E8E'}]}>2%</Text>
      </View>
    </View>
  </View>
);

const SecondRoute = () => (
  <View
    style={{
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20%',
      flex: 1,
    }}>
    <Text style={[styles.heading]}>Consumer</Text>
  </View>
);

const ThirdRoute = () => (
  <View
    style={{
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20%',
      flex: 1,
    }}>
    <Text style={[styles.heading]}>Products</Text>
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#7ba8bb',
      width: '25%',
      alignSelf: 'center',
      height: 3,
      marginHorizontal: '3%',
    }}
    style={{
      backgroundColor: 'transparent',
      elevation: 0,
      width: '100%',
      alignSelf: 'center',
    }}
    renderLabel={({route, focused, color}) => (
      <Text style={[styles.heading, {color: focused ? '#7ba8bb' : '#d5d7d8'}]}>
        {route.title}
      </Text>
    )}
    pressColor="transparent"
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const OrderManagement = ({navigation}) => {
  const {container, heading} = styles;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Country'},
    {key: 'second', title: 'Consumer'},
    {key: 'third', title: 'Products'},
  ]);
  const tValues = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const tValues2 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={container}>
      <SafeAreaView
        style={{alignSelf: 'center', alignItems: 'center', marginBottom: '8%'}}>
        <View style={{height: hp(15), marginTop: '5%'}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{}}>
            <View
              underlayColor={'rgb(0,0,0)'}
              style={{
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                borderWidth: 1,
                borderColor: '#c5a865',
                width: wp(70),
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 5,
                marginHorizontal: 16,
                marginBottom: 16,
                backgroundColor: '#224e73',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  padding: '5%',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                }}>
                <View style={{width: '55%'}}>
                  <Text
                    style={[
                      heading,
                      {
                        fontSize: 15,
                        color: '#8ea4b8',
                        fontWeight: '400',
                        marginBottom: '10%',
                      },
                    ]}>
                    Order cycle time
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: '3%',
                    }}>
                    <View style={{height: '100%'}}>
                      <Text>
                        <Text
                          style={[
                            heading,
                            {
                              fontSize: 30,
                              color: '#FFFFFF',
                              fontWeight: '500',
                            },
                          ]}>
                          1
                        </Text>
                        <Text
                          style={[
                            heading,
                            {
                              fontSize: 15,
                              color: '#FFFFFF',
                              fontWeight: '400',
                            },
                          ]}>
                          {' '}
                          day {'   '}
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#a09368',
                        alignItems: 'center',
                        height: '75%',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          alignSelf: 'flex-end',
                          marginLeft: '14%',
                          marginBottom: 3,
                        }}>
                        <Arrow color="#47a8b3" />
                      </View>

                      <Text
                        style={[
                          heading,
                          {
                            fontSize: 15,
                            color: '#47a8b3',
                            fontWeight: '700',
                            alignSelf: 'flex-end',
                            textAlign: 'center',
                          },
                        ]}>
                        2%
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    width: '45%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Waves />
                </View>
              </View>
            </View>

            <View
              underlayColor={'rgb(0,0,0)'}
              style={{
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                borderWidth: 1,
                borderColor: '#c0bdb6',
                width: wp(70),
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 5,
                marginHorizontal: 16,
                marginBottom: 16,
                backgroundColor: '#FFFFFF',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  padding: '5%',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                }}>
                <View style={{width: '55%'}}>
                  <Text
                    style={[
                      heading,
                      {
                        fontSize: 15,
                        color: '#8ea4b8',
                        fontWeight: '400',
                        marginBottom: '10%',
                      },
                    ]}>
                    Order leave time
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: '3%',
                    }}>
                    <View style={{height: '100%'}}>
                      <Text>
                        <Text
                          style={[
                            heading,
                            {
                              fontSize: 30,
                              color: '#295477',
                              fontWeight: '500',
                            },
                          ]}>
                          8
                        </Text>
                        <Text
                          style={[
                            heading,
                            {
                              fontSize: 15,
                              color: '#295477',
                              fontWeight: '400',
                            },
                          ]}>
                          {' '}
                          hrs {'   '}
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        borderLeftWidth: 1,
                        borderLeftColor: '#a09368',
                        alignItems: 'center',
                        height: '80%',
                        flexDirection: 'row',
                      }}>
                      <View style={{alignSelf: 'flex-end', marginLeft: '14%'}}>
                        <Arrow color="#8E8E8E" />
                      </View>

                      <Text
                        style={[
                          heading,
                          {
                            fontSize: 15,
                            color: '#47a8b3',
                            fontWeight: '700',
                            alignSelf: 'flex-end',
                          },
                        ]}>
                        2%
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '45%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Waves />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          underlayColor={'rgb(0,0,0)'}
          style={{
            borderRadius: 14,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            width: wp(90),
            aspectRatio: 1,
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 5,
            marginTop: '3%',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
          }}>
          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5%',
              }}>
              <Text>
                <Text style={[heading, {color: '#7ba8bb', fontSize: 15}]}>
                  Order cycle time
                </Text>
                <Text style={[heading, {color: '#8ea4b8', fontSize: 15}]}>
                  {' '}
                  (Warehouse)
                </Text>
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#7ba8bb',
                    height: 28,
                    aspectRatio: 1,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Filter />
                </View>
              </TouchableOpacity>
            </View>
            <Chart
              style={{alignSelf: 'center', width: '100%', aspectRatio: 1.6}}
              data={[
                {x: 0, y: 1.8},
                {x: 1, y: 2.2},
                {x: 2, y: 3.2},
                {x: 3, y: 2.7},
                {x: 4, y: 3.2},
                {x: 5, y: 2.8},
                {x: 6, y: 3},
              ]}
              padding={{left: 42, bottom: 20, right: 42, top: 10}}
              xDomain={{min: 0, max: 6}}
              yDomain={{min: 0, max: 6}}>
              <VerticalAxis
                tickCount={5}
                theme={{
                  labels: {visible: false},
                  ticks: {visible: false},
                  grid: {stroke: {color: '#e1e9ef'}},
                  axis: {stroke: {color: 'transparent'}},
                }}
              />
              <HorizontalAxis
                tickCount={7}
                theme={{
                  labels: {
                    formatter: v => String(tValues[v]),
                    label: {
                      color: '#7ba8bb',
                      fontFamily: 'DMSans-Regular',
                      fontSize: 12,
                    },
                  },
                  ticks: {visible: false},
                  grid: {visible: false},
                  axis: {stroke: {color: '#fee6d7'}},
                }}
              />
              <Area
                theme={{
                  gradient: {
                    from: {color: '#fee6d7'},
                    to: {color: '#ffffff', opacity: 0.2},
                  },
                }}
              />
              <Line
                hideTooltipOnDragEnd={true}
                theme={{stroke: {color: '#6497aa', width: 2}}}
                tooltipComponent={
                  <Tooltip
                    theme={{
                      formatter: ({x, y}) =>
                        tValues2[x] + ', ' + y.toFixed(1) + ' hrs',
                      label: {
                        color: '#FFFFFF',
                        fontWeight: '400',
                        fontFamily: 'DMSans-Regular',
                        dy: 60,
                      },
                      shape: {color: '#224e73', width: 80, height: 30, dy: 60},
                    }}
                  />
                }
              />
            </Chart>

            <View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingVertical: '5%',
                }}>
                <View
                  style={{
                    backgroundColor: '#fee6d7',
                    height: 28,
                    aspectRatio: 1,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ChartS />
                </View>
                <Text style={[heading, {color: '#7ba8bb'}]}> View details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          underlayColor={'rgb(0,0,0)'}
          style={{
            borderRadius: 14,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            width: wp(90),
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 5,
            marginTop: '4%',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
          }}>
          <View
            style={{
              paddingHorizontal: '2.5%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingVertical: '8%',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[heading, {}]}>This week</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '12%',
                }}>
                <Text
                  style={[
                    heading,
                    {textAlign: 'center', color: '#7ba8bb', fontSize: 24},
                  ]}>
                  12
                </Text>
                <Text
                  style={[heading, {textAlign: 'center', color: '#7ba8bb'}]}>
                  {' '}
                  hrs
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 1,
                height: '120%',
                backgroundColor: '#e1e9ef',
              }}
            />
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[heading, {}]}>Last week</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '12%',
                }}>
                <Text
                  style={[
                    heading,
                    {textAlign: 'center', color: '#7ba8bb', fontSize: 24},
                  ]}>
                  10
                </Text>
                <Text
                  style={[heading, {textAlign: 'center', color: '#7ba8bb'}]}>
                  {' '}
                  hrs
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 1,
                height: '120%',
                backgroundColor: '#e1e9ef',
              }}
            />
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[heading, {}]}>This week</Text>
              <Text style={[heading, {color: '#dadada'}]}>(Avg. time)</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '6%',
                }}>
                <Text
                  style={[
                    heading,
                    {textAlign: 'center', color: '#7ba8bb', fontSize: 24},
                  ]}>
                  8
                </Text>
                <Text
                  style={[heading, {textAlign: 'center', color: '#7ba8bb'}]}>
                  {' '}
                  hrs
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          underlayColor={'rgb(0,0,0)'}
          style={{
            borderRadius: 14,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            width: wp(90),
            aspectRatio: 0.94,
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 5,
            marginTop: '4%',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
          }}>
          <View style={{height: '100%'}}>
            <TabView
              swipeEnabled={true}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              // style={{height:hp(300), marginTop:hp(1)}}
              sceneContainerStyle={{backgroundColor: '#f8f8f8'}}
              renderTabBar={renderTabBar}
            />
            <View style={{backgroundColor: '#f8f8f8'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f8f8f8',
                  alignItems: 'center',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingVertical: '5%',
                }}>
                <View
                  style={{
                    backgroundColor: '#c2d2ef',
                    height: 28,
                    aspectRatio: 1,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Eye />
                </View>
                <Text style={[heading, {color: '#7ba8bb'}]}> View details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f1e9',
    flex: 1,
  },
  heading: {
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
    fontWeight: '400',
    color: '#000000',
  },
});

export default OrderManagement;
