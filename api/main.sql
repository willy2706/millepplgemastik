DROP TABLE IF EXISTS mille_products;
CREATE TABLE mille_products (
    -- product information
    product_id                      BIGSERIAL       NOT NULL,
    product_name                    VARCHAR(128),
    product_reference_code          VARCHAR(32),
    product_upc_barcode             BIGINT,
    product_status                  INTEGER,
    product_short_description       TEXT,
    product_description             TEXT,

    -- product price
    product_buy_price               NUMERIC,
    product_sell_price              NUMERIC,

    -- product category
    product_category_id             BIGINT,

    -- product quantity
    product_quantity                BIGINT,
    PRIMARY KEY (product_id)
)

DROP INDEX IF EXIST idx_mille_products_1;
CREATE INDEX idx_mille_products_1 ON mille_products(LOWER(product_name))

DROP TABLE IF EXISTS mille_products_images;
CREATE TABLE mille_products_images (
    product_image_id                BIGSERIAL       NOT NULL,
    product_id                      BIGINT          NOT NULL,
    product_image_location          TEXT            NOT NULL,
    product_image_caption           TEXT,
    product_image_position          BIGINT,
    product_image_cover             INTEGER,
    PRIMARY KEY (product_image_id)
)

DROP INDEX IF EXIST idx_mille_products_images_1;
CREATE INDEX idx_mille_products_images_1 ON mille_products_images(product_id)

DROP TABLE IF EXISTS mille_categories;
CREATE TABLE mille_categories (
    category_id                     BIGSERIAL       NOT NULL,
    category_parent_id              BIGINT          NOT NULL,
    category_name                   VARCHAR(128)    NOT NULL,
    category_description            TEXT,
    category_image_location         TEXT,
    category_friendly_url           VARCHAR(128),
    PRIMARY KEY (category_id)
)

DROP INDEX IF EXIST idx_mille_categories_1;
CREATE INDEX idx_mille_categories_1 ON mille_categories(LOWER(category_name))
