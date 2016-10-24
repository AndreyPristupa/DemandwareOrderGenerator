var xml = require('xmlbuilder'),
    fs = require('fs'),
    orderCount = process.argv[2] || 15000;

var root = xml.create({"orders":[{"@xmlns": "http://www.demandware.com/xml/impex/order/2006-10-31"}]},
    {"@version": '1.0', "@encoding": 'UTF-8'});


function generateOrders(callback) {
    for(var i = 0; i < orderCount; i++) {
        var num = Date.now() - Math.floor((Math.random() * 100) + (Math.random() * 100) - (Math.random() * 10));

        var order = {
            "order": {
                "@order-no": num,
                "order-date": "2016-09-28T14:00:35.000Z",
                "created-by": "storefront",
                "original-order-no": num,
                "currency": "USD",
                "customer-locale": "default",
                "taxation": "net",
                "invoice-no": Date.now() - 100,
                "customer": [
                    {
                        "customer-name": "ASD",
                        "customer-email": "demo@demo.net",
                        "billing-address": [
                            {
                                "first-name": "Annie",
                                "last-name": "Eastwood",
                                "address1": "288 W 3rd St",
                                "city": "South Boston",
                                "postal-code": "02127-1357",
                                "state-code": "MA",
                                "country-code": "us",
                                "phone": "2025550162"
                            }
                        ]
                    }
                ],
                "status": [
                    {
                        "order-status": "COMPLETED",
                        "shipping-status": "SHIPPED",
                        "confirmation-status": "CONFIRMED",
                        "payment-status": "PAID"
                    }
                ],
                "current-order-no": num,
                "product-lineitems": [
                    {
                        "product-lineitem": [
                            {
                                "net-price": "234.33",
                                "tax": "34.33",
                                "gross-price": "204.75",
                                "base-price": "234.33",
                                "lineitem-text": "lol",
                                "tax-basis": "234.33",
                                "position": "1",
                                "product-id": 883360352015, // change IT
                                "product-name": "Apple",
                                "quantity": {
                                    "@unit":"",
                                    "#text": "1"
                                },
                                "tax-rate": "0.54",
                                "shipment-id": "00003501", //change IT
                                "gift": "false"
                            }
                        ]
                    }
                ],
                "shipping-lineitems": [
                    {
                        "shipping-lineitem": [
                            {
                                "net-price": "234.35",
                                "tax": "234.23",
                                "gross-price": "23.33",
                                "base-price": "23.44",
                                "lineitem-text": "Shipping",
                                "tax-basis": "34.44",
                                "item-id": "STANDARD_SHIPPING",
                                "shipment-id": "00003501", // change IT
                                "tax-rate": "0.34"
                            }
                        ]
                    }
                ],
                "shipments": [
                    {
                        "shipment": [
                            {
                                "@shipment-id": "00003501",
                                "status": [
                                    {
                                        "shipping-status": "SHIPPED"
                                    }
                                ],
                                "shipping-method": "001",
                                "shipping-address": [
                                    {
                                        "first-name": "Andrii",
                                        "last-name": "Prystupa",
                                        "address1": "288 W 3rd St",
                                        "city": "South Denmark",
                                        "postal-code": "0712-1357",
                                        "state-code": "MA",
                                        "country-code": "UK",
                                        "phone": "2062350162"
                                    }
                                ],
                                "gift": "false",
                                "gift-message": "lol",
                                "totals": [
                                    {
                                        "merchandize-total": [
                                            {
                                                "net-price": "234.35",
                                                "tax": "234.23",
                                                "gross-price": "23.33"
                                            }
                                        ],
                                        "adjusted-merchandize-total": [
                                            {
                                                "net-price": "234.35",
                                                "tax": "234.23",
                                                "gross-price": "23.33"
                                            }
                                        ],
                                        "shipping-total": [
                                            {
                                                "net-price": "234.35",
                                                "tax": "234.23",
                                                "gross-price": "23.33"
                                            }
                                        ],
                                        "adjusted-shipping-total": [
                                            {
                                                "net-price": "234.35",
                                                "tax": "234.23",
                                                "gross-price": "23.33"
                                            }
                                        ],
                                        "shipment-total": [
                                            {
                                                "net-price": "234.35",
                                                "tax": "234.23",
                                                "gross-price": "23.33"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "totals": [
                    {
                        "merchandize-total": [
                            {
                                "net-price": "234.35",
                                "tax": "234.23",
                                "gross-price": "23.33"
                            }
                        ],
                        "adjusted-merchandize-total": [
                            {
                                "net-price": "234.35",
                                "tax": "234.23",
                                "gross-price": "23.33"
                            }
                        ],
                        "shipping-total": [
                            {
                                "net-price": "234.35",
                                "tax": "234.23",
                                "gross-price": "23.33"
                            }
                        ],
                        "adjusted-shipping-total": [
                            {
                                "net-price": "234.35",
                                "tax": "234.23",
                                "gross-price": "23.33"
                            }
                        ],
                        "order-total": [
                            {
                                "net-price": "234.35",
                                "tax": "234.23",
                                "gross-price": "23.33"
                            }
                        ]
                    }
                ],
                "payments": [
                    {
                        "payment": [
                            {
                                "credit-card": [
                                    {
                                        "card-type": "VISA",
                                        "card-number": "XXXX-XXXX-XXXX-1111",
                                        "card-holder": "lol",
                                        "expiration-month": "04",
                                        "expiration-year": "2019"
                                    }
                                ],
                                "amount": "2356.33",
                                "processor-id": "BASIC_CREDIT",
                                "transaction-id": num
                            }
                        ]
                    }
                ]
            }
        };
        root.ele(order);

        if(i == orderCount - 1) {
            callback();
        }
    }
}

generateOrders(function() {
    fs.writeFile("orders.xml", root.end({
        pretty: true,
        indent: '  ',
        newline: '\n',
        allowEmpty: false
    }));
    console.log("Done. Order count: " + orderCount);
});