# Inventory Management Backend (NodeJS with Express)

This repository contains the backend implementation for the Inventory Management Desktop Application, developed as part of a DBMS course. It showcases the use of cutting-edge technologies such as **NodeJS**, **Express**, and **SQL Server** to create a robust and efficient inventory management solution. The application effectively manages various aspects of inventory operations, including customer management, product tracking, order processing, and supplier coordination.

## Features
- **Customer Management**: Add, update, and track customer information.
- **Product Management**: Maintain product details, categories, and stock levels.
- **Order Management**: Create and manage customer orders, including payment processing and shipment tracking.
- **Payment Handling**: Integrate various payment methods and manage transactions.
- **Shipment Tracking**: Monitor shipment status and delivery details.
- **Supplier Management**: Keep track of supplier information and manage purchase orders.
- **Discount Codes and Gift Cards**: Implement and manage discount codes and gift cards.
- **Inventory Tracking**: Keep an accurate count of inventory, track stock levels, and manage purchase orders.

## Technologies Used
### Backend (NodeJS)
- **NodeJS with Express**: Server-side framework for building fast and scalable web applications and APIs.
- **RESTful APIs**: Implemented for seamless communication between frontend and backend.
- **Deployment**: Deployed on Vercel for a scalable and efficient deployment process.

### Database (SQL Server)
- **SQL Server**: Designed to handle the application's data needs with advanced features.
- **Triggers**: Automated responses to specific changes in the database.
- **Scalar and Inline Functions**: Customized functions to enhance database performance.
- **Stored Procedures**: Precompiled collections of SQL statements for efficient data management.

## API Endpoints
Here is a list of available API endpoints:

- **Base URL**: `https://rest-api-node-js-express-sql-server.vercel.app`

### Customer APIs
- [`GET /api/customers`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers): Retrieve all customers.
- [`POST /api/customers/addCustomer`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/addCustomer): Add a new customer.
- [`PUT /api/customers/updateCustomer`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/updateCustomer): Update an existing customer.
- [`POST /api/customers/login`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/login): Customer login.
- [`POST /api/customers/register`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/register): Customer registration.
- [`GET /api/customers/getCustomerOrderHistory`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/getCustomerOrderHistory): Get order history for a customer.

### Database Connection
- [`GET /api/db-connection-status`](https://rest-api-node-js-express-sql-server.vercel.app/api/db-connection-status): Check the database connection status.

### Info Block Tag APIs
- [`GET /api/smalltaginfo/getNoOfOrdersToday`](https://rest-api-node-js-express-sql-server.vercel.app/api/smalltaginfo/getNoOfOrdersToday): Get the number of orders today.
- [`GET /api/smalltaginfo/getTotalSalesToday`](https://rest-api-node-js-express-sql-server.vercel.app/api/smalltaginfo/getTotalSalesToday): Get the total sales today.
- [`GET /api/smalltaginfo/getTotalRevenue`](https://rest-api-node-js-express-sql-server.vercel.app/api/smalltaginfo/getTotalRevenue): Get the total revenue.
- [`GET /api/smalltaginfo/getTotalProducts`](https://rest-api-node-js-express-sql-server.vercel.app/api/smalltaginfo/getTotalProducts): Get the total number of products.
- [`GET /api/smalltaginfo/getOrderCountPastWeek`](https://rest-api-node-js-express-sql-server.vercel.app/api/smalltaginfo/getOrderCountPastWeek): Get the total number of orders in the past week.

### Graph and Chart APIs
- [`GET /api/graph-charts/getPastWeekOrder`](https://rest-api-node-js-express-sql-server.vercel.app/api/graph-charts/getPastWeekOrder): Get order data for the past week.
- [`GET /api/graph-charts/getTopVendorPieChart`](https://rest-api-node-js-express-sql-server.vercel.app/api/graph-charts/getTopVendorPieChart): Get top vendor data for the pie chart.

### Supplier and Shipper APIs
- [`GET /api/shippers/getShippers`](https://rest-api-node-js-express-sql-server.vercel.app/api/shippers/getShippers): Retrieve all shippers.
- [`GET /api/suppliers/getSuppliers`](https://rest-api-node-js-express-sql-server.vercel.app/api/suppliers/getSuppliers): Retrieve all suppliers.

### Purchase Order APIs
- [`GET /api/purchaseOrder/getPurchaseOrder`](https://rest-api-node-js-express-sql-server.vercel.app/api/purchaseOrder/getPurchaseOrder): Get purchase orders.
- [`PUT /api/purchaseOrder/UpdatePurchaseOrderStatus`](https://rest-api-node-js-express-sql-server.vercel.app/api/purchaseOrder/UpdatePurchaseOrderStatus): Update purchase order status.
- [`PUT /api/purchaseOrder/UpdatePurchaseOrderPaymentStatus`](https://rest-api-node-js-express-sql-server.vercel.app/api/purchaseOrder/UpdatePurchaseOrderPaymentStatus): Update purchase order payment status.

### Sales Channel APIs
- [`GET /api/saleschannel/getSalesChannel`](https://rest-api-node-js-express-sql-server.vercel.app/api/saleschannel/getSalesChannel): Get sales channels.

### Invoice APIs
- [`GET /api/invoices/getInvoice`](https://rest-api-node-js-express-sql-server.vercel.app/api/invoices/getInvoice): Get an invoice by ID.
- [`GET /api/invoices/getInvoices`](https://rest-api-node-js-express-sql-server.vercel.app/api/invoices/getInvoices): Get all invoices.

### Product APIs
- [`GET /api/products/getTop5SellingProduct`](https://rest-api-node-js-express-sql-server.vercel.app/api/products/getTop5SellingProduct): Get top 5 selling products.
- [`GET /api/inventory/getInventory`](https://rest-api-node-js-express-sql-server.vercel.app/api/inventory/getInventory): Get inventory.
- [`GET /api/inventory/inventory`](https://rest-api-node-js-express-sql-server.vercel.app/api/inventory/inventory): Get inventory by category ID.

### Order APIs
- [`POST /api/orders/insertOrder`](https://rest-api-node-js-express-sql-server.vercel.app/api/orders/insertOrder): Insert a new order.
- [`GET /api/orders/getOrderAccToParam`](https://rest-api-node-js-express-sql-server.vercel.app/api/orders/getOrderAccToParam): Get orders according to parameters.
- [`PUT /api/orders/fulfillOrder`](https://rest-api-node-js-express-sql-server.vercel.app/api/orders/fulfillOrder): Update fulfillment status of an order.
- [`DELETE /api/orders/deleteOrder`](https://rest-api-node-js-express-sql-server.vercel.app/api/orders/deleteOrder): Delete an order.

### Dropdown APIs
- [`GET /api/dropdown/getShipperDropDown`](https://rest-api-node-js-express-sql-server.vercel.app/api/dropdown/getShipperDropDown): Get shipper dropdown options.
- [`GET /api/dropdown/getCustomerDropDown`](https://rest-api-node-js-express-sql-server.vercel.app/api/dropdown/getCustomerDropDown): Get customer dropdown options.
- [`GET /api/dropdown/getDiscountCodeDropDown`](https://rest-api-node-js-express-sql-server.vercel.app/api/dropdown/getDiscountCodeDropDown): Get discount code dropdown options.
- [`GET /api/dropdown/getGiftCardDropDown`](https://rest-api-node-js-express-sql-server.vercel.app/api/dropdown/getGiftCardDropDown): Get gift card dropdown options.
- [`GET /api/dropdown/getProductsDropDown`](https://rest-api-node-js-express-sql-server.vercel.app/api/dropdown/getProductsDropDown): Get product dropdown options.
- [`GET /api/dropdown/getSalesChannelDropDown`](https://rest-api-node-js-express-sql-server.vercel.app/api/dropdown/getSalesChannelDropDown): Get sales channel dropdown options.

### Discount APIs
- [`GET /api/discount/getDiscountCodes`](https://rest-api-node-js-express-sql-server.vercel.app/api/discount/getDiscountCodes): Get discount codes.
- [`POST /api/discount/insertDiscountCode`](https://rest-api-node-js-express-sql-server.vercel.app/api/discount/insertDiscountCode): Insert a new discount code.

### Payment APIs
- [`GET /api/payment/getPayment`](https://rest-api-node-js-express-sql-server.vercel.app/api/payment/getPayment): Get payment by order ID.
- [`PUT /api/payment/updatePaymentStatus`](https://rest-api-node-js-express-sql-server.vercel.app/api/payment/updatePaymentStatus): Update payment status.

### Shipment and Tracking APIs
- [`GET /api/shipment/getShipments`](https://rest-api-node-js-express-sql-server.vercel.app/api/shipment/getShipments): Get all shipments.
- [`GET /api/shipment/getShipment`](https://rest-api-node-js-express-sql-server.vercel.app/api/shipment/getShipment): Get shipment by order ID.
- [`PUT /api/shipment/updateShipmentStatus`](https://rest-api-node-js-express-sql-server.vercel.app/api/shipment/updateShipmentStatus): Update shipment status.

### WebPage APIs
- [`POST /api/customers/login`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/login): Customer login.
- [`POST /api/customers/register`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/register): Customer registration.
- [`GET /api/customers/getCustomerOrderHistory`](https://rest-api-node-js-express-sql-server.vercel.app/api/customers/getCustomerOrderHistory): Get order history for a customer.

### Inventory APIs
- [`GET /api/inventory/getInventory`](https://rest-api-node-js-express-sql-server.vercel.app/api/inventory/getInventory): Get inventory.
- [`GET /api/inventory/inventory`](https://rest-api-node-js-express-sql-server.vercel.app/api/inventory/inventory): Get inventory by category ID.
