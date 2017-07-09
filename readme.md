Notes:

To scrape websites need to change some settings directly in Xcode.

Under info.plist
- App transport security settings:

change the setting to 'Allow Arbitrary Loads' and change the boolean to 'Yes'
We need that due to not having a node.js backend for localhost that we can use in development.
