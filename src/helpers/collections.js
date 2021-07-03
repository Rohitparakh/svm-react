// get collections
export const getCollections = (collections, category, type, limit) => {
    const finalCollections = category
      ? collections.filter(
          collection => collection.category.filter(single => single === category)[0]
        )
      : collections;
  
    if (type && type === "new") {
      const newCollections = finalCollections.filter(single => single.new);
      return newCollections.slice(0, limit ? limit : newCollections.length);
    }
    if (type && type === "bestSeller") {
      return finalCollections
        .sort((a, b) => {
          return b.saleCount - a.saleCount;
        })
        .slice(0, limit ? limit : finalCollections.length);
    }
    if (type && type === "saleItems") {
      const saleItems = finalCollections.filter(
        single => single.discount && single.discount > 0
      );
      return saleItems.slice(0, limit ? limit : saleItems.length);
    }
    return finalCollections.slice(0, limit ? limit : finalCollections.length);
  };
  
  // get collection discount price
  export const getDiscountPrice = (price, discount) => {
    return discount && discount > 0 ? price - price * (discount / 100) : null;
  };
  
  // get collection cart quantity
  export const getCollectionCartQuantity = (cartItems, collection, color, size) => {
    let collectionInCart = cartItems.filter(
      single =>
        single.id === collection.id &&
        (single.selectedCollectionColor
          ? single.selectedCollectionColor === color
          : true) &&
        (single.selectedCollectionSize ? single.selectedCollectionSize === size : true)
    )[0];
    if (cartItems.length >= 1 && collectionInCart) {
      if (collection.variation) {
        return cartItems.filter(
          single =>
            single.id === collection.id &&
            single.selectedCollectionColor === color &&
            single.selectedCollectionSize === size
        )[0].quantity;
      } else {
        return cartItems.filter(single => collection.id === single.id)[0].quantity;
      }
    } else {
      return 0;
    }
  };
  
  //get collections based on category
  export const getSortedCollections = (collections, sortType, sortValue) => {
    if (collections && sortType && sortValue) {
      if (sortType === "category") {
        return collections.filter(
          collection => collection.category.filter(single => single === sortValue)[0]
        );
      }
      if (sortType === "tag") {
        return collections.filter(
          collection => collection.tag.filter(single => single === sortValue)[0]
        );
      }
      if (sortType === "color") {
        return collections.filter(
          collection =>
            collection.variation &&
            collection.variation.filter(single => single.color === sortValue)[0]
        );
      }
      if (sortType === "size") {
        return collections.filter(
          collection =>
            collection.variation &&
            collection.variation.filter(
              single => single.size.filter(single => single.name === sortValue)[0]
            )[0]
        );
      }
      if (sortType === "filterSort") {
        let sortCollections = [...collections];
        if (sortValue === "default") {
          return sortCollections;
        }
        if (sortValue === "priceHighToLow") {
          return sortCollections.sort((a, b) => {
            return b.price - a.price;
          });
        }
        if (sortValue === "priceLowToHigh") {
          return sortCollections.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
    }
    return collections;
  };
  
  // get individual element
  const getIndividualItemArray = array => {
    let individualItemArray = array.filter(function(v, i, self) {
      return i === self.indexOf(v);
    });
    return individualItemArray;
  };
  
  // get individual categories
  export const getIndividualCategories = collections => {
    let collectionCategories = [];
    collections &&
      collections.map(collection => {
        return (
          collection.category &&
          collection.category.map(single => {
            return collectionCategories.push(single);
          })
        );
      });
    const individualCollectionCategories = getIndividualItemArray(collectionCategories);
    return individualCollectionCategories;
  };
  
  // get individual tags
  export const getIndividualTags = collections => {
    let collectionTags = [];
    collections &&
      collections.map(collection => {
        return (
          collection.tag &&
          collection.tag.map(single => {
            return collectionTags.push(single);
          })
        );
      });
    const individualCollectionTags = getIndividualItemArray(collectionTags);
    return individualCollectionTags;
  };
  
  // get individual colors
  export const getIndividualColors = collections => {
    let collectionColors = [];
    collections &&
      collections.map(collection => {
        return (
          collection.variation &&
          collection.variation.map(single => {
            return collectionColors.push(single.color);
          })
        );
      });
    const individualCollectionColors = getIndividualItemArray(collectionColors);
    return individualCollectionColors;
  };
  
  // get individual sizes
  export const getCollectionsIndividualSizes = collections => {
    let collectionSizes = [];
    collections &&
      collections.map(collection => {
        return (
          collection.variation &&
          collection.variation.map(single => {
            return single.size.map(single => {
              return collectionSizes.push(single.name);
            });
          })
        );
      });
    const individualCollectionSizes = getIndividualItemArray(collectionSizes);
    return individualCollectionSizes;
  };
  
  // get collection individual sizes
  export const getIndividualSizes = collection => {
    let collectionSizes = [];
    collection.variation &&
      collection.variation.map(singleVariation => {
        return (
          singleVariation.size &&
          singleVariation.size.map(singleSize => {
            return collectionSizes.push(singleSize.name);
          })
        );
      });
    const individualSizes = getIndividualItemArray(collectionSizes);
    return individualSizes;
  };
  
  export const setActiveSort = e => {
    const filterButtons = document.querySelectorAll(
      ".sidebar-widget-list-left button, .sidebar-widget-tag button, .collection-filter button"
    );
    filterButtons.forEach(item => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  
  export const setActiveLayout = e => {
    const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
    gridSwitchBtn.forEach(item => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  
  export const toggleShopTopFilter = e => {
    const shopTopFilterWrapper = document.querySelector(
      "#collection-filter-wrapper"
    );
    shopTopFilterWrapper.classList.toggle("active");
    if (shopTopFilterWrapper.style.height) {
      shopTopFilterWrapper.style.height = null;
    } else {
      shopTopFilterWrapper.style.height =
        shopTopFilterWrapper.scrollHeight + "px";
    }
    e.currentTarget.classList.toggle("active");
  };
  