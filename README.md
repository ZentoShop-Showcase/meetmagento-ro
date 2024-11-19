# Meet Magento on [Astro](https://astro.build)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Deployment AWS

Deployment is done automatically on push using the GitHub Actions workflow in `.github/workflows/build-deploy.yml`.

First, set up 2 buckets (DEV and PROD) and 2 CloudFront distributions (DEV and PROD). Also set up the IAM user with the permissions described in the following section.
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Bucket1",
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "[DEV_BUCKET_ARN]*"
        },
        {
            "Sid": "Bucket2",
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": "[PROD_BUCKET_ARN]*"
        },
        {
            "Sid": "InvalidationLive",
            "Effect": "Allow",
            "Action": [
                "cloudfront:ListInvalidations",
                "cloudfront:GetInvalidation",
                "cloudfront:CreateInvalidation"
            ],
            "Resource": "[PROD_CF_ARN]"
        },
        {
            "Sid": "InvalidationDev",
            "Effect": "Allow",
            "Action": [
                "cloudfront:ListInvalidations",
                "cloudfront:GetInvalidation",
                "cloudfront:CreateInvalidation"
            ],
            "Resource": "[DEV_CF_ARN]"
        }
    ]
}
```

Following parameters needs to be configured as Repository secrets:

- AWS_ACCESS_KEY_ID - AWS access key ID for a IAM user with access as described in the following section
- AWS_SECRET_ACCESS_KEY - AWS secret access key for the IAM user
- S3_BUCKET - S3 bucket name where the build will be deployed
- CF_DISTRIBUTION - CloudFront distribution ID for the production environment
- CF_DISTRIBUTION_DEV - CloudFront distribution ID for the development environment
