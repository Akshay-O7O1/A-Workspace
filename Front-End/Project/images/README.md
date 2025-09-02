# Profile Image Instructions

## Adding Your Profile Photo

1. **Add your profile image** to this `images` folder
2. **Name it `profile.jpg`** (or update the path in `js/data.js`)
3. **Recommended specifications:**
   - Format: JPG, PNG, or WebP
   - Size: 500x500 pixels (square aspect ratio)
   - File size: Under 500KB for faster loading

## Current Setup

- The website is configured to look for `images/profile.jpg`
- If no image is found, a placeholder icon (👤) will be displayed
- The image will be automatically cropped to a circle

## To Change the Image Path

Edit the `profileImage` property in `js/data.js`:

```javascript
profileImage: "images/your-photo-name.jpg"
```

## Tips for Best Results

- Use a high-quality, well-lit photo
- Make sure your face is centered in the image
- Avoid busy backgrounds - solid colors work best
- Consider professional headshots for a more polished look

---

**Note:** Until you add your actual profile photo, the website will display a placeholder icon.