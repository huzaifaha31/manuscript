# Malay Medical Manuscript Exploration

An interactive digital archive exploring traditional Malay medicine, identifying diseases, ingredients, preparation methods, and spiritual elements from ancient manuscripts.

## 🚀 How to Publish on GitHub Pages

This project is configured to automatically build and deploy to GitHub Pages using GitHub Actions.

### Step 1: Push Code to GitHub
Create a new repository on GitHub and push all these files to it.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Add Your Gemini API Key
To make the AI features work, you need to add your API Key to the repository secrets.

1. Go to your GitHub Repository.
2. Click on **Settings** (top tab).
3. On the left sidebar, click **Secrets and variables** > **Actions**.
4. Click the green button **New repository secret**.
5. **Name**: `API_KEY`
6. **Secret**: *Paste your Google Gemini API Key here*
7. Click **Add secret**.

### Step 3: Enable GitHub Pages
1. Go to **Settings** (top tab).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown menu.

### Step 4: Verify Deployment
1. Click on the **Actions** tab at the top of your repository.
2. You should see a workflow titled "Deploy to GitHub Pages" running.
3. Once it shows a green checkmark, your site is live!
4. The URL will usually be `https://<your-username>.github.io/<repo-name>/`.

## 🛠 Local Development

To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add your API key. You can copy `.env.example` to `.env` and fill in the value:
   ```env
   API_KEY=your_actual_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
