var scans = [
    {
        "name": "KARATE",
        "img": "https://assets.coingecko.com/coins/images/30384/standard/karate.jpg?1696529274",
        "ch": 94,
        "scanlink": "./scan/?ticker=KARATE",
    },
    {
        "name": "MEMEAI",
        "img": "data:image/jpeg;base64,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",
        "ch": 85,
        "scanlink": "./scan/?ticker=MEMEAI",
    },
    {
        "name": "MYRO",
        "img": "https://assets.coingecko.com/coins/images/32878/standard/MYRO_200x200.png?1699709942",
        "ch": 76.8,
        "scanlink": "./scan/?ticker=MYRO",
    },
    {
        "name": "SNEK",
        "img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCBAcDAf/EADwQAAIBAwEFBQUFBgcBAAAAAAECAwAEEQUGEiExQRNRYXGBByIykaEUM3KxwUJSYoKy0RYjJGNzwvAV/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAQCAwUBBgf/xAA0EQACAgECBAMGBAYDAAAAAAAAAQIDEQQSITFBUQUT0SJhcYGRoRQyQsEGM7Hh8PEjUmL/2gAMAwEAAhEDEQA/ALlXoDwphK/Zqp72VfmcVxvB1LJnXTgoAUAKAFACgBQBFaztFpmi7q3tx/nP8EESl5G/lH5nhVc7Yx4PmM6fSXah4rjkqd9tfq96zJZQJp0BOFd17SY+nwr9aFC2f/lfc9Hpv4djHEr38iBeJpmLXN1eXUnWSWeTJ8sHGKmtLX14/M2oaLSwW1QR1+unzk8JgXnt1HIMXb0GB9SPlVc+aRdWvZk/ce9WFIoAUAKAFAEDrO1mmaWXhVzd3a8DbW2GZfxHkvrVUrUniPF+4f0vh2o1T9iPDuVPUdotZ1MkG6TTrUjjDbcZMfxSdD+HFdVVk/zvC7L1PT6T+H6asSue5kVDBa2yt2Kqm8ffYOSx8zzJpiuqFaxFG0lCtYisHyWcY4Hzw/LwqZVO013nBb394Hu3uVdFXqOJ2ilz58awZ+3klPwArEg7+rH9P5aXlL/lQ5CCWnb7mzTAmKAFAETre0OnaLupdSl7mT7u2hG9I/p0HicCq52KLx1GtLortVLFa9Cl6prmr6vlZHbT7XJxBbSYkf8AG/6L8zQqpz/PwXZep63ReAU0+1d7T+xHQxRWqhLeIRpnkoAB8TTMYRgsRWDdzGCxFYMXm3eTN4Zx86kLztNR7hicAsRyHDOfE0CVmowYCPtDhivkRxJoELdSeioIxuxxo3eQevyqO5CbtbOxzyiGCSVuSKTVLeFk87GO6SiupgsHYrbw5zuEu7fvHjk+pbNK1LMsj+pajXhC8u7extXubyZIYIx70jnAFMykorLEYQlZJRissoWobe6jcuBo9nHaw5+8vRvO48EB4fOq151n5Vhe839P4IsZul9CPn2t2neCSOO8sQzcpFgwy+XEgeoNdlTfjCkhpeDaZPPFkLb3klqJALElnJLyrOrlz4s2CTXYKdSwoff1N2q+FUdsI4Pr6hfSA9nBFEOhmkBOPAD+9T3Xy5RS+L9DktU3yR4yNqMnBrqDB6CHj8ieVDhf/wBl9Cl3SfU84Znkuvs10Y8lSQ6cmA6Y6Giu2an5dnPuKX2NLJIhFTJwSeuG5Duq5zSMyVrke1hbahrMvZaRbmYcmlb3YY/At1PgM0rLUOXCHH+hXY4VLda8e7qWi29niNEDf6vdmbr9mCxoPIEE+uah5U3xcn8hKXiOH7EFj38y4X6M9pIE4sBvAd5Bzj6VbYsxaEaZKNkWxE6yXk7BgcBNzHIoRkH1Jb5VVRjiMazKcV0/z+xVPae7jTtPiDYjku/fX97CMR9Rn5VOSzZBPv8AsMeEtK2Uuy/c5bLe3azSHtGXdYqquvxY6Z55qtarM5R3Ykuj5P5nqo1ycN/QlrYm4iSZTjfG9gHh6+NPVz3wUl1Ep3OLwzNYjjgR04H4fSplfnmTQ4GSxwM8T8Q8q4znn5IVluZwLlZyjSELHGGOTzxw7uHEmsGWulZbtry2/oja/BqujzLHjgbMcwk1SNFhd5A7xhETJkbgOAHPjTs7k7Fnpn5mPb/KfEv2h7DST7k2vtuIGyLKFuDf8jdfwipbJWfm4Lt6mLdrow4U8+7/AG9S828ENtCkFtFHFEgwscahVXyAq9JJYRmSlKT3SeWeldIigDREDRTCOFlU8TCDy55ZD4dRjl5Clpp1yyh+pq+vbLmive0AfadAFwIpBLY3CTSRgHeVeKsfLBJzy4UTsWFNdGWaKEqr9j/UmsnPLNHuzPCZlgu5ABKqDeSVM5B54I8RVFmkhq37fCaN+vxCzR8YLMfeSdjp4tbcQJlyuchj7pzxrTpqVUFBdDKu1XmTc3wybAgyvAbw6k/s+VWFLuMuwxgnIHR+vyrpzziHuVjgnntrBEt3UZnn6KD0z39e4UhJQhJxqWO7H43TsgpWPPZFw9mmkKhl1TsmWIR9halv2lJy7jvBIAB8D31GpJvK5LgjP8QubSrzx5v9kX2mTKFACgBQBq3Tq00UaEdpG4kY5+7Ucye7IyPWqL2sYG9JGTnuXIxAF5eR3KKBBGjKrEcZd7/r+f5xqrecsnqbljYjmW3ukWOz9wHt3CrMGe3iRsSWzju/2z9OXlTdtq4fTun6GjobLNRz6c+zXqZ6FdjUrBSQTNGAssRXdKt3+R50/p7lbDPXqI6yt0WY6PkSPZfCd7JHKToKvFPMNPUr2KwwAC90/COEcWlPl0HjVVt0a17+iGNPVK7jyiub7HrsLs+t/cyS3w7a0tH4hvhmuDxYnvC8OHf5UlXDc8Pkufvf9hrV6nZFbeDfL3R6fU6WAAAAAAOAApsyD7QcFACgDWjT7Z23au6xLIUCI+7nHMkjjz6Z5UrZN5waFFMFFSayzytoo7hVcRqlqpzDCq7oP8RA555geR58pVV/qZDU3vLhH5kftlr42e0hp4wj3Up7O3RuRbvPgBx+nWu32+VDK5nNDpfxNu18lzKXsNs3/iOa51vaHeu43JSPtW+9bkWPgOQHn3Upp6fNzOfE1Nfq/wAMlRRwx9iT1TYy57UFIUu4o+EEkcxiuEXorE8G88imnB/qWccmuDEIapYe2W3PNNZj8uqNQbJ61MAm5fBc8VudRUL80BY0NSaxx+b9CSvri8+z8o8fvhG9o/s8WBnOo3alHOTHaAqW/FISW+WKjChrm8fD15hd4huxtWcd/TkXTT7G102zjtLGFYbeIYRF6f3PjTEYqKwjPsslZJym8s2KkQFACgBQBrgGK5ZAoEdwD73c4H6gfTxpW6PHI/pbMrY+gsGJtIgy7rIu4y9xHAj6VfB5ihS2LjNplB9sETldJnyezVpUI6bxAI/pNJa5cmbHgslunH4Fn2CSKPY/ShDjdMG8cfvEkn65pnT48pYM7XtvUzz3J+rxQUAKAFACgBQAoAUAc12620u4b+fS9LKwrAQssrKN5n4H3ScgAcOOM55Y51Q5bs9l9/nyNnQ6OO1WT5vkVrSNrtesr8Xcl3NdKWHaxSMWWRe4Z/a7t2oRhOMXNLH1x8OPN9sD12mptjta+Hf/AF3yXL2tXcA0iztGP+okn7VUPNVCkE/MgVXrZLYl1EPB65ebKXRLBv8AsskL7IxIRgRTyoviN7P6mrNH/KKfFY41LfdL/PsW6mjNFACgBQAoAUAKAFAHJPaJYm22reU70cV5EsiFOAZl4N68j61zTJedKLbWeK/c3NHZu0y67X/orvYKcHL76nKvvHKnvHcaenpYTi1L+vL4F6taMbg3d7cN280t9eXDhULcXZs8FH/sCs+6iFVUoye5vl3z0Lq5pYcVtS+h2rZjSP8A4eh2unl994lJkbvckk+mSajTX5cFE89qbvPudhK1aLigBQAoAUAKAFACgDU1TTbPVrRrXUIFmhboeBB7wRxB8qhOKksMsqtnVLdB4ZWZ/Zvoxx2VzqEQ7lmB/qU1FKaWFNji8St6pP5Eromyek6FN9otIne4ZcdtO++wHcOg9K6oLdufFlFustuW2XBdkTlWCwoAUAKAFACgBQAoAUAf/9k=",
        "ch": 93.9,
        "scanlink": "./scan/?ticker=SNEK",
    },
    {
        "name": "DED",
        "img": "./src/ded.jpeg",
        "ch": 39,
        "scanlink": "./scan/?ticker=DED",
    },
]