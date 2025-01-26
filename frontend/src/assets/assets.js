import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './img-1.jpg'
import profile_img_2 from './img-2.jpg'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Enter a phrase, sentence, or paragraph to describe the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine instantly transforms your text into a stunning, high-quality images.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly save your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Ethan Hunt',
        role:'Graphic Designer',
        stars:5,
        text:`ArtGenie has transformed the way i create visuals. It's incredibly intuitive and user-friendly, making my creative process so much faster and smoother.`
    },
    {
        image:profile_img_2,
        name:'Jacob Wilson',
        role:'Content Creator',
        stars:4,
        text:`Using ArtGenie has been a game-changer for my content creation. It's quick, efficient and produces stunning visuals that impress every time!`
    },
    {
        image:profile_img_3,
        name:'Emma Carter',
        role:'Digital Marketer',
        stars:5,
        text:`ArtGenie makes it easy to bring ideas into life. The tool saves me time and delivers amazing results that exceed expectations.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 100,
      credits: 10,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 500,
      credits: 50,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 1000,
      credits: 100,
      desc: 'Best for enterprise use.'
    },
  ]