import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { phonecall as phoneCall } from 'react-native-communications';

import CustomIcon, { Names as CustomIcons } from '../../../components/common/icons/CustomIcon';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import ImageHeader from '../../../components/navigation/components/ImageHeader';

const StoreDetails = ({ store }) => {
  const details = buildDetails(store);
  const address = Object.assign({}, store.address);
  if (address.address_second_line) {
    address.address_first_line += `, ${address.address_second_line}`;
  }
  return (
    <View>
      <ImageHeader uri={details.cover_image} height={180} />

      <View style={styles.wrap}>

        <View style={styles.details}>
          <Text style={styles.name}>{details.name}</Text>

          <TouchableOpacity onPress={() => phoneCall(formatCallPhoneNumber(store.phone_number), true)}>
            <View style={styles.detail}>
              <CustomIcon name={CustomIcons.Phone} width={20} height={20} />
              <Text style={styles.phoneLineText}>{details.phone_number}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.detail}>
            <CustomIcon name={CustomIcons.Fork} width={20} height={20} />
            <Text style={styles.cuisineLineText}>{details.cuisines}</Text>
          </View>

          <TouchableOpacity onPress={() => Linking.openURL(address.google_url)}>
            <View style={styles.address}>
              <View style={styles.firstLine}>
                <CustomIcon name={CustomIcons.Location} width={20} height={20} />
                <Text style={styles.addressLineText}>{address.address_first_line}</Text>
              </View>
              <Text style={styles.addressLine}>{address.address_street_number} {address.address_street_name}</Text>
              <Text style={styles.addressLine}>{details.location}</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.ratings}>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>999</Text>
            <View style={styles.ratingIcon}>
              <CustomIcon name={CustomIcons.BreadHeart} width={24} height={24} />
            </View>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>15</Text>
            <View style={styles.ratingIcon}>
              <CustomIcon name={CustomIcons.BreadOkay} width={24} height={24} />
            </View>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>2</Text>
            <View style={styles.ratingIcon}>
              <CustomIcon name={CustomIcons.BreadCross} width={24} height={24} />
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};

const formatViewPhoneNumber = (input) => {
  const m = input.match(/^(\d)(\d{4})(\d{4})$/);
  return (!m) ? null : `0${m[1]} ${m[2]} ${m[3]}`;
};

const formatCallPhoneNumber = (input) => {
  const m = input.match(/^(\d)(\d{8})$/);
  return (!m) ? null : `${m[2]}`;
};

const buildDetails = (store) => {
  const details = Object.assign({}, store);
  details.location = `${store.suburb.name}, ${store.suburb.city.name}`;

  details.cuisines = '';
  if (store.cuisines) {
    details.cuisines = store.cuisines.map(cuisine => cuisine.name).join(', ');
  }

  details.phone_number = formatViewPhoneNumber(store.phone_number);
  return details;
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.m,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.l,
    paddingLeft: LayoutConstants.margins.m,
  },

  details: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  name: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  detail: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  firstLine: {
    flexDirection: 'row',
    marginBottom: -2,
  },
  phoneLineText: {
    marginLeft: 5,
    fontSize: 17,
  },
  cuisineLineText: {
    marginTop: 2,
    marginLeft: 5,
    fontSize: 17,
  },
  addressLineText: {
    marginLeft: 5,
    fontSize: 17,
  },

  address: {
    marginTop: 3,
  },
  addressLine: {
    marginLeft: 25,
    fontSize: 17,
  },

  ratings: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 4,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  ratingCount: {
    opacity: 0.6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9b4e20',
    marginTop: 4,
    marginRight: 4,
  },

});

export default StoreDetails;
