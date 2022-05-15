import Menu from "./Menu";

export function translateMain(country) {
  const foodsEng = Menu.foods;
  if (country.includes("korea")) {
    return [
      {
        name: "타코",
        image: "/images/taco.png",
        price: 5000,
        status: "available",
      },
      {
        name: "부리또",
        image: "/images/burritos.png",
        price: 5000,
        status: "available",
      },
      {
        name: "아침 부리또",
        image: "/images/breakfast-burrito.png",
        price: 8000,
        status: "available",
      },
      {
        name: "타말레스",
        image: "/images/tamales.png",
        price: 3000,
        status: "available",
      },
      {
        name: "퀘사디아",
        image: "/images/quesadilla.png",
        price: 5000,
        status: "available",
      },
      {
        name: "엔칠라다",
        image: "/images/enchiladas.png",
        price: 8000,
        status: "available",
      },
      {
        name: "나쵸",
        image: "/images/nachos.png",
        price: 8000,
        status: "available",
      },
      {
        name: "샐러드 보울",
        image: "/images/salad-bowl.png",
        price: 8000,
        status: "available",
      },
      {
        name: "츄러스",
        image: "/images/salad-bowl.png",
        price: 5000,
        status: "available",
      },
    ];
  } else {
    return foodsEng;
  }
}

export function translateToppings(country) {
  const beveragesEng = Menu.toppings;
  if (country.includes("korea")) {
    return [
      {
        value: "치즈",
        label: "치즈",
        status: "available",
      },
      {
        value: "소고기",
        label: "소고기",
        status: "available",
      },
      {
        value: "양파",
        label: "양파",
        status: "available",
      },
      {
        value: "할라페뇨",
        label: "할라페뇨",
        status: "available",
      },
      {
        value: "토마토",
        label: "토마토",
        status: "available",
      },
      {
        value: "치킨",
        label: "치킨",
        status: "available",
      },
    ];
  } else if (country.includes("mexico")) {
    return [
      {
        value: "queso",
        label: "queso",
        status: "available",
      },
      {
        value: "carne",
        label: "carne",
        status: "available",
      },
      {
        value: "cebolla",
        label: "cebolla",
        status: "available",
      },
      {
        value: "Jalapeño",
        label: "Jalapeño",
        status: "available",
      },
      {
        value: "tomate",
        label: "tomate",
        status: "available",
      },
      {
        value: "Pollo",
        label: "Pollo",
        status: "available",
      },
    ];
  } else {
    return beveragesEng;
  }
}

export function translateBeverage(country) {
  const beveragesEng = Menu.beverages;
  if (country.includes("korea")) {
    return [
      {
        name: "코카콜라",
        image: "/images/coke.png",
        price: 1000,
        status: "available",
      },
      {
        name: "코카콜라 제로",
        image: "/images/coke-zero.png",
        price: 1000,
        status: "available",
      },
      {
        name: "환타",
        image: "/images/fanta.png",
        price: 1000,
        status: "available",
      },
      {
        name: "펩시",
        image: "/images/pepsi.png",
        price: 1000,
        status: "available",
      },
      {
        name: "스프라이트",
        image: "/images/sprite.png",
        price: 1000,
        status: "available",
      },
      {
        name: "루트 비어",
        image: "/images/root-beer.png",
        price: 1000,
        status: "available",
      },
      {
        name: "하리토스 망고",
        image: "/images/jarritos-mango.png",
        price: 1000,
        status: "available",
      },
      {
        name: "하리토스 멕시칸 콜라",
        image: "/images/jarritos-mexican-cola.png",
        price: 1000,
        status: "available",
      },
      {
        name: "하리토스 파인애플",
        image: "/images/jarritos-pineapple.png",
        price: 1000,
        status: "available",
      },
      {
        name: "하리토스 타마린도",
        image: "/images/jarritos-tamarindo.png",
        price: 1000,
        status: "available",
      },
    ];
  } else {
    return beveragesEng;
  }
}

export function translateAlert(location) {
  if (location.includes("korea")) {
    return alert("수량을 선택해 주세요👩‍🍳");
  } else {
    alert("Select Quantity Please👩‍🍳");
  }
}

export function totalSum(qty) {
  if (qty.length === 0) {
    return null;
  } else {
    return qty.reduce((x, y) => x + y);
  }
}

export function totalPrice(price) {
  if (price.length === 0) {
    return null;
  } else {
    return price.reduce((x, y) => x + y);
  }
}
