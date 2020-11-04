// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1874,
      date: "2020-11-03T16:37:14",
      date_gmt: "2020-11-03T16:37:14",
      guid: {
        rendered:
          "https://3pupscript.globexcorp.net/?post_type=treatment&#038;p=1874",
      },
      modified: "2020-11-03T21:54:05",
      modified_gmt: "2020-11-03T21:54:05",
      slug: "hair-loss",
      status: "publish",
      type: "treatment",
      link: "http://localhost:8000/treatment/hair-loss/",
      title: { rendered: "Hair Loss" },
      content: { rendered: "", protected: false },
      featured_media: 0,
      template: "",
      acf: {
        treatment_panel: {
          treatment_name: "HAIR LOSS ",
          treatment_title: "Hair worth running fingers through",
          treatment_long_description:
            "Hair loss is real and all too common. Some treatments grow wisps. Ours grow your hair back full for long-lasting comfort. Say goodbye to embarrassment and get back to feeling like you. ",
          button: {
            call_to_action_label: "Hair loss",
            call_to_action_link: "",
          },
          treatment_image: {
            ID: 1877,
            id: 1877,
            title: "image-318",
            filename: "image-318.png",
            filesize: 921150,
            url:
              "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
            link: "http://localhost:8000/treatment/hair-loss/image-318/",
            alt: "",
            author: "1",
            description: "",
            caption: "",
            name: "image-318",
            status: "inherit",
            uploaded_to: 1874,
            date: "2020-11-03 21:53:44",
            modified: "2020-11-03 21:53:44",
            menu_order: 0,
            mime_type: "image/png",
            type: "image",
            subtype: "png",
            icon: "http://localhost:8000/wp-includes/images/media/default.png",
            width: 721,
            height: 694,
            sizes: {
              thumbnail:
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318-150x150.png",
              "thumbnail-width": 150,
              "thumbnail-height": 150,
              medium:
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318-300x289.png",
              "medium-width": 300,
              "medium-height": 289,
              medium_large:
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
              "medium_large-width": 580,
              "medium_large-height": 558,
              large:
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
              "large-width": 580,
              "large-height": 558,
              "1536x1536":
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
              "1536x1536-width": 721,
              "1536x1536-height": 694,
              "2048x2048":
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
              "2048x2048-width": 721,
              "2048x2048-height": 694,
              "post-thumbnail":
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
              "post-thumbnail-width": 721,
              "post-thumbnail-height": 694,
              "twentytwenty-fullscreen":
                "http://nextjs-wp-resource.s3.ap-south-1.amazonaws.com/wp-content/uploads/image-318.png",
              "twentytwenty-fullscreen-width": 721,
              "twentytwenty-fullscreen-height": 694,
            },
          },
        },
        treatment_introduction: {
          treatment_intro_text: "Treatments for Hair Loss",
          products: "1",
        },
        features: "3",
        features_grid: "1",
      },
      _links: {
        self: [{ href: "http://localhost:8000/wp-json/wp/v2/treatment/1874" }],
        collection: [{ href: "http://localhost:8000/wp-json/wp/v2/treatment" }],
        about: [
          { href: "http://localhost:8000/wp-json/wp/v2/types/treatment" },
        ],
        "wp:attachment": [
          { href: "http://localhost:8000/wp-json/wp/v2/media?parent=1874" },
        ],
        curies: [
          { name: "wp", href: "https://api.w.org/{rel}", templated: true },
        ],
      },
    },
    {
      id: 1866,
      date: "2020-11-03T05:36:20",
      date_gmt: "2020-11-03T05:36:20",
      guid: {
        rendered:
          "https://3pupscript.globexcorp.net/?post_type=treatment&#038;p=1866",
      },
      modified: "2020-11-03T05:36:20",
      modified_gmt: "2020-11-03T05:36:20",
      slug: "insomnia",
      status: "publish",
      type: "treatment",
      link: "http://localhost:8000/treatment/insomnia/",
      title: { rendered: "Insomnia" },
      content: { rendered: "", protected: false },
      featured_media: 0,
      template: "",
      acf: {
        treatment_panel: null,
        treatment_introduction: null,
        features: null,
        features_grid: null,
      },
      _links: {
        self: [{ href: "http://localhost:8000/wp-json/wp/v2/treatment/1866" }],
        collection: [{ href: "http://localhost:8000/wp-json/wp/v2/treatment" }],
        about: [
          { href: "http://localhost:8000/wp-json/wp/v2/types/treatment" },
        ],
        "wp:attachment": [
          { href: "http://localhost:8000/wp-json/wp/v2/media?parent=1866" },
        ],
        curies: [
          { name: "wp", href: "https://api.w.org/{rel}", templated: true },
        ],
      },
    },
  ]);
};
