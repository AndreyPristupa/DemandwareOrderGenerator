#Demandware Orders Generator

**Generates simple XML Feed for order import**

### Installation:

> npm i

### Before run:
1. Change **shipping_id** to yours (can be found at **Merchant Tools >  Products and Catalogs >  Products**)
2. Change **product_id** to yours (can be found at **Merchant Tools >  Ordering >  Shipping Methods**)

> All needed places for change can be found in the **index.js** by search or by comments: *//change IT*

### Run:

> node index 1000

**1000 is a order count, by default 15000**

### After run:

1. In the folder root **orders.xml** will appear
2. You should to import this orders in your BM:

- Go to **Merchant Tools >  Ordering >  Import & Export**
- Click to **Upload** in the **Import & Export Files** section
- Upload **orders.xml**, return back.
- Click **imports** in the **Orders (XML)** section
- Select **orders.xml** in the list and click **Next >>** button
- After xml validation click **Import** button
- Wait until your orders will imported (~4-8 minutes)
- Check your new orders in the **Merchant Tools >  Products and Catalogs >  Products**