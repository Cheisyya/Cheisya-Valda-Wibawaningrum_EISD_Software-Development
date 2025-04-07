const menu = {
    "Ayam Bakar": { type: "makanan", price: 20000 },
    "Ayam Puk Puk": { type: "makanan", price: 13000 },
    "Ayam Goreng Krispi": { type: "makanan", price: 15000 },
    "Es teh": { type: "minuman", price: 5000 },
    "Es Jeruk": { type: "minuman", price: 7000 }
  };
  
  function hitungTotal(pesanan) {
    let subtotal = 0;
    for (const item in pesanan) {
      const jumlah = pesanan[item];
      const data = menu[item];
      const pajakItem = data.type === 'makanan' ? 0.05 : 0.03;
      subtotal += jumlah * data.price * (1 + pajakItem);
    }
    const total = subtotal * 1.15; 
    return Math.round(total);
  }
  
  const rehan = hitungTotal({ "Ayam Bakar": 2, "Es teh": 1 });
  const amba = hitungTotal({ "Ayam Puk Puk": 1, "Es teh": 3 });
  const faiz = hitungTotal({
    "Ayam Bakar": 1,
    "Ayam Goreng Krispi": 1,
    "Ayam Puk Puk": 1,
    "Es teh": 1,
    "Es Jeruk": 1
  });
  
  console.log({ Rehan: rehan, Amba: amba, Faiz: faiz });
  