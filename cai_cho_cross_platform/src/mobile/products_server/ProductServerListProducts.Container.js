import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import ProductServerItem from './../products_server/presenters/ProductServerItem.View';
import { loadAllStocktakeEntry } from './ProductServer.Action';

const ProductServerListProducts = (ProductItem) => {
    return class extends Component {
        render() {
            const listProducts = this.props.products.map((item, index) =>
                <ProductItem key={index} product={item} index={index} />)
            return (
                <ScrollView style={{
                    flexDirection: 'column',
                    flex: 5
                }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {listProducts}
                    </View>
                </ScrollView>
            );
        }
    }
}

const ProductServerFlatList = (Productitem) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.pageSize = 20;
            this.pageIndex = 0;
            this.handleLoadMore = this.handleLoadMore.bind(this);
        }

        componentDidMount() {
            this.props.loadAllStocktakeEntry(this.pageSize, this.pageIndex, () => {
                this.pageIndex++;
            });
        }

        renderProductItem({ item, index }) {
            return <Productitem key={index} product={item} index={index} />
        }

        handleLoadMore() {
            this.props.loadAllStocktakeEntry(this.pageSize, this.pageIndex, () => {
                this.pageIndex++;
            })
        }

        keyExtractor(item, index) { return index };

        render() {
            return (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FlatList
                        data={this.props.products}
                        renderItem={this.renderProductItem}
                        keyExtractor={this.keyExtractor}
                        onEndReached={this.handleLoadMore}
                    />
                </View>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadAllStocktakeEntry
    }, dispatch);
}

export default ProductServerListProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductServerFlatList(ProductServerItem));