# Website Repository
This is the repository for my website - somewhat of an online portfolio. I cannot and will not claim this design as I got it from [Tim Baker](https://github.com/tbakerx) (Thanks, Tim!). I haven't yet broken into website design and I'm not sure when that will work its way up my priority list so I took Tim's design and modified it to fit me as needed. 

## Modifications
Some HTML and Javascript was modified to make this my own. I wanted some more text in places, less text in others, and I needed my contact form to work. If you dig into the code, you can see that the contact form uses AWS API Gateway. This invokes a lambda function that uses SES to email me. It's throttled just incase something goes wrong. Feel free to test it out. I will respond!

## Hosting
This is hosted statically out of an AWS S3 bucket. Nothing fancy.