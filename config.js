export default {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'hades-active',
      read_key: process.env.COSMIC_READ_KEY || 'b4VULeNOl5JpaCiGbREddH4DptzNjOvinIqyEcOoK4hUPGtEaU',
      write_key: process.env.COSMIC_WRITE_KEY || '',
      port: process.env.PORT || '',
      snipcart_api_key: process.env.SNIPCART_KEY || 'YTQ0MTBhZmMtZGMxOC00MDFhLThhOTgtMjBhNDNkMWJjYzZiNjM3MzUwMDgzMjQxODcxMDcw'
    }
  }
