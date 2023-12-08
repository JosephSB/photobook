# PHOTOBOOK BACKEND

## CONFIGURATION

### CONFIG GCP STORAGE

- CREATE BUCKET 
- CREATE API KEYS -> APIs & Services > Enabled APIs > Credentials > + Create credentials > Service account
- CREATE JSON KEY -> Join to service account created > KEYS > ADD KEY > Create new Key > JSON
- Move JSON KEY to src/config
- Change ACCOUNT_CREDENTIALS into src/config/index.ts for name JSON KEY
- ADD PROJECTID AND BUCKET NAME IN .env

### MIGRATIONS

- FIRST DELETE OLD MIGRATIONS IN FOLDER src/db/postgress/migrations
- GENERATE MIGRATION => npm run migration:generate src/db/postgress/migrations/:name
- RUN MIGRATION => npm run migration:run


## API ENDPOINTS

#### ADD PHOTO TO POST

```
 ENDPOINT: [URL]/api/storage/uploadPhotoForPost
 METHOD: POST
 BODY(FORMDATA): {
    "post_id": 1,
    "type_media": 1/2,
    "file": VIDEO/IMG FILE,
}
 RESPONSE: {
    "message": null,
    "error": false,
    "media": {
        "post_gallery_id": xx,
        "media_id": "xxxxxxxxx",
        "type_media": x,
        "order": x
    }
  }
```

## GRAPHQL ENDPOINTS

- JOIN TO http://localhost:5000/graphql
