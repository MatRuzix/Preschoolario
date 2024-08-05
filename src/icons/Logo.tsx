import { alfaSlab } from "@/app/[locale]/layout";

const Logo = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
    >
      <path
        id="legs"
        stroke="black"
        fill="rgb(247, 228, 228)"
        strokeWidth="1"
        d="M 421.81 637.197 C 421.81 637.197 445.698 644.059 445.698 644.059 C 456.057 646.076 481.236 648.993 491.566 649.011 C 491.566 649.011 510.677 649.011 510.677 649.011 C 526.205 649.038 528.364 655.545 541.255 660.825 C 539.86 665.487 537.232 667.941 534.164 671.721 C 532.874 673.303 530.706 675.256 531.27 677.438 C 531.766 679.355 538.082 686.234 539.755 688.088 C 546.09 695.14 561.771 712.234 569.922 715.787 C 583.108 721.549 602.153 722.885 602.411 740.796 C 602.65 757.854 594.757 783.018 588.078 798.957 C 585.039 806.191 581.676 815.233 574.69 819.768 C 565.345 825.829 546.826 829.628 535.522 829.837 C 526.272 830.01 520.06 828.229 523.1 818.041 C 509.034 811.135 510.218 802.665 508.364 789.87 C 508.364 789.87 502.316 753.519 502.316 753.519 C 501.752 750.421 500.404 740.397 499.048 738.261 C 497.166 735.316 488.441 732.281 484.877 730.727 C 469.56 724.048 452.11 725.884 433.276 718.196 C 426.903 715.587 419.803 711.352 416.496 705.355 C 412.436 697.984 413.19 687.861 414.002 679.909 C 415.464 665.542 417.576 651.11 421.81 637.197 Z"
      />
      <path
        id="pole"
        stroke="black"
        fill="rgb(169, 165, 161)"
        strokeWidth="1"
        d="M 594.75 613.808 C 595.506 606.974 601.381 599.995 604.862 593.815 C 606.177 591.479 607.974 587.19 610.254 585.79 C 612.023 584.709 624.226 583.855 626.913 583.818 C 626.913 583.818 649.617 582.91 649.617 582.91 C 649.617 582.91 675.158 581.092 675.158 581.092 C 675.158 581.092 703.537 579.738 703.537 579.738 C 722.201 578.611 722.401 597.941 713.849 605.42 C 707.038 611.381 688.856 610.073 679.888 610.173 C 679.888 610.173 656.238 611.99 656.238 611.99 C 656.238 611.99 646.779 611.245 646.779 611.245 C 646.779 611.245 636.373 611.99 636.373 611.99 C 636.373 611.99 618.4 612.899 618.4 612.899 C 618.4 612.899 594.75 613.808 594.75 613.808 Z M 398.033 623.804 C 389.452 623.877 391.514 624.759 385.688 625.458 C 385.688 625.458 367.714 626.53 367.714 626.53 C 362.359 626.54 355.189 628.439 350.79 625.613 C 348.245 623.986 347.319 622.114 347.006 619.26 C 346.174 611.681 350.648 607.419 356.098 602.739 C 369.824 590.943 389.812 595.633 406.499 595.633 C 406.499 595.633 402.961 610.163 402.961 610.163 C 402.961 610.163 398.033 616.689 398.033 616.689 C 398.033 616.689 398.033 623.804 398.033 623.804 Z"
      />
      <path
        id="dress"
        stroke="black"
        fill="color(srgb-linear 0.368 0.412 0.779)"
        strokeWidth="1"
        d="M 493.827 373.391 C 493.827 373.391 506.289 372.527 506.289 372.527 C 522.801 371.982 541.855 372 557.851 375.781 C 561.807 376.717 574.821 379.161 576.943 382.034 C 578.137 383.651 577.917 386.895 577.917 388.84 C 577.917 388.84 577.917 406.106 577.917 406.106 C 577.917 406.106 579.752 419.738 579.752 419.738 C 580.306 426.2 581.739 437.35 587.1 441.921 C 588.505 443.111 590.559 443.548 592.251 444.274 C 592.251 444.274 588.429 444.274 588.429 444.274 C 588.429 444.274 590.339 453.362 590.339 453.362 C 590.339 453.362 565.495 457.906 565.495 457.906 C 570.167 471.238 581.491 501.481 588.954 512.432 C 588.954 512.432 604.185 529.698 604.185 529.698 C 612.537 539.939 618.203 551.118 618.051 564.232 C 617.927 574.618 612.155 586.123 607.023 595.129 C 607.023 595.129 584.415 629.816 584.415 629.816 C 584.415 629.816 575.443 643.294 575.443 643.294 C 571.439 648.782 561.644 663.25 554.983 664.676 C 549.939 665.758 538.299 660.46 533.961 657.879 C 529.871 655.443 528.323 653.462 523.45 651.554 C 515.413 648.418 499.217 649.754 490.005 649.654 C 490.005 649.654 480.449 648.828 480.449 648.828 C 457.593 647.31 442.733 645.129 421.205 637.105 C 413.685 634.297 400.317 626.817 396.991 619.666 C 394.439 614.158 400.469 608.433 403.431 604.217 C 412.471 591.367 419.59 576.99 432.671 567.13 C 437.555 563.441 437.927 566.367 446.049 571.501 C 456.169 577.881 467.703 582.025 479.495 584.678 C 505.629 590.549 537.086 587.295 561.673 577.208 C 569.814 573.873 581.481 568.575 587.473 562.414 C 571.19 567.575 560.345 568.293 543.517 565.139 C 538.72 564.24 531.324 563.531 528.228 559.687 C 557.697 559.687 575.003 553.371 596.073 533.333 C 587.913 535.551 582.284 540.658 558.806 545.847 C 533.971 551.327 504.788 548.8 480.449 542.157 C 473.255 540.195 453.579 533.878 448.333 529.734 C 445.477 527.471 440.239 515.512 438.175 511.523 C 438.175 511.523 420.067 471.537 420.067 471.537 C 420.067 471.537 414.525 456.188 414.525 456.188 C 412.194 451.418 400.861 448.782 396.331 441.167 C 395.061 439.013 395.663 437.604 393.914 434.278 C 393.914 434.278 388.419 426.099 388.419 426.099 C 388.419 426.099 381.921 415.194 381.921 415.194 C 381.921 415.194 372.653 396.11 372.653 396.11 C 372.653 396.11 367.693 389.749 367.693 389.749 C 367.693 389.749 382.027 385.287 382.027 385.287 C 388.859 382.215 391.467 377.544 403.049 377.971 C 403.049 377.971 411.649 378.771 411.649 378.771 C 411.649 378.771 442.227 374.3 442.227 374.3 C 442.581 389.212 455.175 410.404 473.751 401.572 C 483.451 396.946 491.095 383.042 493.827 373.391 Z M 533.961 495.165 C 533.961 495.165 509.117 503.081 509.117 503.081 C 500.889 504.725 499.981 503.871 492.872 504.335 C 473.245 505.606 468.237 505.216 448.917 501.527 C 454.047 509.715 464.473 512.641 473.761 514.631 C 489.843 518.075 487.635 516.13 501.472 516.067 C 504.711 516.049 507.884 516.23 511.027 515.339 C 520.698 512.613 530.683 504.207 533.961 495.165 Z"
      />
      <path
        id="dress shadow"
        stroke="black"
        fill="rgb(118, 129, 197)"
        strokeWidth="1"
        d="M 449.482 501.658 C 468.803 505.348 473.811 505.739 493.437 504.466 C 500.547 504.003 501.455 504.857 509.683 503.212 C 509.683 503.212 534.527 495.297 534.527 495.297 C 531.249 504.339 521.263 512.745 511.593 515.472 C 508.449 516.362 505.277 516.18 502.038 516.198 C 488.201 516.263 490.409 518.207 474.327 514.763 C 465.039 512.772 454.613 509.846 449.482 501.658 Z M 448.527 530.739 C 448.527 530.739 474.327 540.108 474.327 540.108 C 487.456 544.452 510.169 548.76 524.015 548.914 C 541.493 549.104 555.043 547.469 571.794 542.534 C 571.794 542.534 596.639 533.465 596.639 533.465 C 584.159 550.031 557.461 559.792 536.438 559.819 C 536.438 559.819 528.793 559.819 528.793 559.819 C 532.969 563.245 538.799 564.09 544.083 565.089 C 565.172 569.088 568.182 566.853 588.039 562.545 C 585.773 566.171 582.181 567.852 578.483 570.042 C 570.791 574.596 561.293 578.439 552.683 581.166 C 524.341 590.144 486.549 590.408 459.037 578.622 C 449.52 574.541 445.048 571.442 437.059 565.272 C 439.171 561.028 440.653 560.51 443.462 557.093 C 448.029 551.54 445.383 549.868 456.171 545.279 C 456.171 545.279 448.527 530.739 448.527 530.739 Z"
      />
      <path
        id="hair"
        stroke="black"
        fill="black"
        strokeWidth="1"
        d="M 613.848 240.27 C 613.848 240.27 611.487 229.365 611.487 229.365 C 611.487 229.365 604.978 198.467 604.978 198.467 C 604.978 198.467 594.082 147.576 594.082 147.576 C 594.082 147.576 588.943 123.948 588.943 123.948 C 588.61 121.84 587.351 117.36 588.943 115.579 C 590.111 114.07 595.999 113.715 598.109 113.434 C 608.284 112.044 618.782 114.497 628.662 116.679 C 626.82 120.522 622.997 123.776 623.44 126.048 C 623.951 128.665 626.967 127.793 628.662 127.147 C 636.468 124.166 641.217 121.559 649.956 123.948 C 646.068 135.408 647.197 135.79 647.179 147.576 C 647.17 156.01 644.986 164.806 643.17 173.022 C 639.808 188.253 636.152 203.52 628.941 217.55 C 625.45 224.349 620.348 236.207 613.848 240.27 Z M 346.28 274.803 C 343.641 264.534 343.223 254.383 342.492 243.905 C 342.492 243.905 341.689 233.909 341.689 233.909 C 341.689 233.909 342.492 226.639 342.492 226.639 C 342.492 226.639 343.78 210.281 343.78 210.281 C 347.049 187.816 357.103 162.453 373.526 146.141 C 388.154 131.609 400.247 126.502 419.422 120.422 C 427.199 117.95 446.678 114.043 454.604 113.952 C 470.573 113.77 486.045 115.86 499.971 124.184 C 499.971 124.184 519.412 137.707 519.412 137.707 C 522.404 139.77 526.709 142.687 530.523 142.505 C 534.327 142.324 540.206 139.106 543.486 137.235 C 552.547 132.055 566.721 121.231 576.814 120.313 C 576.814 120.313 595.147 211.19 595.147 211.19 C 595.147 211.19 600.96 240.27 600.96 240.27 C 600.96 240.27 603.275 252.911 603.275 252.911 C 603.173 256.855 597.656 260.317 595.572 263.934 C 592.961 268.478 593.064 275.112 593.239 280.255 C 593.73 293.905 588.934 308.945 582.916 321.15 C 579.648 327.775 576.983 333.173 571.251 338.253 C 559.658 348.522 541.188 354.156 525.894 355.838 C 520.7 356.401 505.755 359.827 501.82 358.41 C 501.82 358.41 512.93 352.011 512.93 352.011 C 534.022 337.635 546.262 317.378 551.261 292.978 C 552.438 287.243 553.89 279.674 553.631 273.894 C 553.391 268.378 548.789 254.992 546.761 249.358 C 546.761 249.358 542.133 234.818 542.133 234.818 C 542.133 234.818 534.466 220.277 534.466 220.277 C 528.727 209.39 523.755 199.585 513.859 191.614 C 491.398 173.549 462.657 171.241 435.159 176.302 C 428.837 177.465 414.486 180.955 409.236 183.927 C 409.236 183.927 424.052 186.653 424.052 186.653 C 421.254 191.996 419.17 190.77 413.867 191.596 C 403.848 193.151 404.534 192.996 394.425 193.015 C 384.978 193.033 383.258 195.15 375.907 200.894 C 368.925 206.337 361.344 214.652 358.299 223.003 C 353.613 235.745 356.52 255.083 358.299 268.442 C 350.039 268.469 351.001 268.732 346.28 274.803 Z M 349.057 295.705 C 353.058 299.131 356.241 303.466 361.093 305.847 C 366.853 308.673 369.334 306.328 372.546 309.617 C 372.546 309.617 383.073 325.694 383.073 325.694 C 389.674 334.654 399.11 343.469 408.313 349.83 C 415.301 354.665 423.357 358.764 431.457 361.435 C 435.855 362.889 442.772 363.607 445.346 367.533 C 445.346 367.533 432.382 367.533 432.382 367.533 C 432.382 367.533 425.903 368.169 425.903 368.169 C 425.903 368.169 418.495 366.86 418.495 366.86 C 409.551 365.606 403.468 366.025 394.425 362.743 C 388.572 360.618 380.638 352.339 375.75 347.994 C 368.622 341.67 357.879 333.718 353.241 325.694 C 348.41 317.315 348.364 305.111 349.057 295.705 Z"
      />
      <path
        id="head"
        stroke="black"
        fill="rgb(247, 228, 228)"
        strokeWidth="1"
        d="M 404.558 183.73 C 404.558 183.73 423.974 177.968 423.974 177.968 C 449.311 172.07 477.366 172.651 500.664 184.311 C 506.597 187.283 514.353 191.818 518.818 196.489 C 526.187 204.177 530.72 213.818 535.914 222.807 C 543.914 236.665 542.574 236.011 547.932 250.069 C 551.63 259.757 555.154 267.835 555.028 278.241 C 554.766 298.833 545.233 322.579 531.156 338.219 C 522.935 347.352 506.675 359.602 494.082 361.847 C 494.082 361.847 494.082 375.478 494.082 375.478 C 493.821 377.823 492.316 380.559 491.248 382.749 C 486.472 392.608 479.463 402.833 466.687 403.569 C 452.233 404.395 445.244 391.555 443.021 380.022 C 442.332 376.487 442.516 369.417 439.914 366.9 C 438.186 365.237 429.788 363.383 426.886 362.447 C 418.576 359.757 410.946 356.303 403.588 351.778 C 393.161 345.362 382.696 335.92 375.473 326.406 C 375.473 326.406 364.146 309.684 364.146 309.684 C 361.651 307.621 358.834 308.676 355.048 307.648 C 351.03 306.567 347.292 303.859 344.575 300.942 C 338.71 294.662 336.72 286.384 337.856 278.241 C 338.137 276.232 338.857 272.07 340.341 270.608 C 341.992 268.981 348.302 268.898 351.166 268.244 C 349.495 262.329 348.282 256.194 348.253 250.069 C 348.253 250.069 348.253 233.711 348.253 233.711 C 348.418 220.843 356.409 210.665 366.427 202.586 C 369.532 200.069 375.571 195.807 379.318 194.289 C 383.123 193.144 387.065 193.962 390.967 194.289 C 394.782 194.226 412.316 192.453 415.199 190.981 C 417.187 189.964 417.81 188.946 419.12 187.364 C 419.12 187.364 404.558 183.73 404.558 183.73 Z"
      />
      <path
        id="hands"
        stroke="black"
        fill="rgb(247, 228, 228)"
        strokeWidth="1"
        d="M 616.405 255.706 C 624.52 254.661 626.468 258.878 629.748 265.23 C 629.748 265.23 634.611 276.135 634.611 276.135 C 638.575 285.15 640.252 286.759 639.792 297.037 C 639.568 302.144 638.537 309.496 634.029 312.74 C 629.626 315.903 619.507 314.285 619.357 323.391 C 619.357 323.391 624.089 347.018 624.089 347.018 C 624.089 347.018 637.797 413.358 637.797 413.358 C 638.818 423.709 631.294 435.959 621.09 439.595 C 617.886 440.73 615.056 440.612 611.721 440.621 C 611.721 440.621 598.603 440.621 598.603 440.621 C 593.431 440.557 587.679 439.786 583.978 435.886 C 580.145 431.842 579.489 424.982 578.882 419.72 C 578.882 419.72 577.1 406.997 577.1 406.997 C 577.1 406.997 577.1 387.004 577.1 387.004 C 577.213 374.255 583.378 375.445 588.307 366.102 C 588.307 366.102 598.408 331.57 598.408 331.57 C 599.68 325.744 600.608 322.164 600.469 316.121 C 600.196 304.943 593.151 294.165 592.983 280.679 C 592.925 275.49 592.241 267.793 595.512 263.513 C 598.839 259.15 603.185 259.414 607.973 258.188 C 607.973 258.188 616.405 255.706 616.405 255.706 Z M 265.048 325.69 C 269.733 325.581 277.051 326.926 280.976 329.479 C 288.369 334.296 296.501 349.181 300.756 357.015 C 304.165 363.294 303.94 366.057 310.04 371.392 C 316.205 376.781 326.914 380.989 334.383 384.614 C 340.585 387.622 346.385 391.439 353.121 393.329 C 361.234 395.602 367.495 390.531 372.432 394.738 C 375.113 397.028 378.129 405.307 379.768 408.814 C 379.768 408.814 390.778 427.898 390.778 427.898 C 392.633 430.997 395.238 435.041 393.231 438.64 C 391.817 441.167 386.692 443.902 384.041 445.265 C 372.798 451.044 364.683 452.571 352.185 452.435 C 339.021 452.28 330.213 444.538 321.266 436.086 C 321.266 436.086 309.825 425.926 309.825 425.926 C 307.718 423.364 304.372 416.575 302.77 413.358 C 300.211 408.233 295.47 393.929 292.014 390.985 C 287.609 387.095 282.26 390.539 277.229 390.985 C 265.489 392.229 255.443 377.026 249.607 368.829 C 243.432 360.169 240.302 340.948 248.379 332.57 C 252.595 328.207 259.144 326.562 265.048 325.69 Z"
      />
      <path
        id="ropes"
        stroke="black"
        fill="rgb(217, 217, 217)"
        strokeWidth="1"
        d="M 573.623 98.305 C 575.572 97.577 575.788 97.384 577.997 97.465 C 589.678 97.925 586.371 108.436 587.083 114.866 C 587.083 114.866 589.041 124.078 589.041 124.078 C 589.041 124.078 608.242 218.029 608.242 218.029 C 609.245 222.423 610.508 223.51 611.895 227.239 C 611.895 227.239 616.382 242.897 616.382 242.897 C 617.15 246.326 618.245 250.58 615.174 253.205 C 613.141 254.936 606.369 258.308 603.981 256.124 C 602.21 254.514 602.388 250.664 602.079 248.425 C 602.079 248.425 598.877 231.846 598.877 231.846 C 598.877 231.846 598.304 222.634 598.304 222.634 C 598.304 222.634 592.797 195.002 592.797 195.002 C 592.797 195.002 581.171 135.129 581.171 135.129 C 581.171 135.129 577.969 119.47 577.969 119.47 C 576.93 116.597 575.562 115.419 574.381 113.023 C 572.451 109.1 570.542 101.786 573.623 98.305 Z M 252.972 327.64 C 252.972 327.64 233.291 281.585 233.291 281.585 C 233.291 281.585 219.926 250.267 219.926 250.267 C 219.926 250.267 204.836 214.344 204.836 214.344 C 204.462 212.806 204.284 211.35 204.836 209.821 C 205.557 207.823 209.135 203.844 211.59 204.627 C 213.482 205.225 214.906 208.976 215.646 210.66 C 215.646 210.66 222.623 227.239 222.623 227.239 C 222.623 227.239 251.239 294.481 251.239 294.481 C 251.239 294.481 260.203 315.665 260.203 315.665 C 261.225 318.08 263.003 322.002 261.365 324.481 C 259.922 326.681 255.434 327.178 252.972 327.64 Z M 666.981 612.26 C 666.981 609.166 666.718 604.007 667.628 601.206 C 669.566 595.284 673.997 589.969 673.425 583.319 C 673.425 583.319 667.917 558.836 667.917 558.836 C 667.917 558.836 656.133 502.648 656.133 502.648 C 656.133 502.648 646.374 455.672 646.374 455.672 C 646.374 455.672 639.312 422.513 639.312 422.513 C 639.312 422.513 637.71 410.539 637.71 410.539 C 637.71 410.539 631.782 381.985 631.782 381.985 C 631.782 381.985 627.247 359.88 627.247 359.88 C 627.247 359.88 620.541 329.481 620.541 329.481 C 619.632 324.525 616.541 317.25 622.975 314.825 C 624.252 314.551 626.114 314.238 627.436 314.825 C 631.351 315.922 633.139 328.412 633.795 332.246 C 633.795 332.246 635.893 346.061 635.893 346.061 C 635.893 346.061 639.209 358.036 639.209 358.036 C 639.209 358.036 645.242 386.591 645.242 386.591 C 645.242 386.591 674.081 523.834 674.081 523.834 C 674.081 523.834 680.656 555.152 680.656 555.152 C 680.656 555.152 684.075 571.731 684.075 571.731 C 686.521 580.428 694.042 579.202 695.259 584.646 C 695.934 587.628 691.625 593.663 690.192 596.6 C 690.192 596.6 685.03 610.022 685.03 610.022 C 682.117 613.319 671.374 612.26 666.981 612.26 Z M 287.609 389.879 C 293.904 389.813 294.794 396.381 296.807 401.328 C 296.807 401.328 314.23 440.934 314.23 440.934 C 314.23 440.934 365.935 566.206 365.935 566.206 C 365.935 566.206 377.128 594.658 377.128 594.658 C 379.152 598.175 381.333 597.953 383.451 600.534 C 386.073 603.721 386.86 611.856 386.916 615.944 C 386.916 615.944 386.916 620.549 386.916 620.549 C 386.907 622.363 387.037 625.052 385.961 626.602 C 384.013 629.392 375.067 630.342 372.885 627.449 C 371.995 626.269 371.301 621.406 370.87 619.628 C 370.87 619.628 367.443 606.732 367.443 606.732 C 367.443 606.732 367.443 599.364 367.443 599.364 C 366.984 596.783 362.178 585.899 360.83 582.784 C 360.83 582.784 302.354 445.542 302.354 445.542 C 302.354 445.542 285.465 405.933 285.465 405.933 C 281.97 398.518 279.405 398.261 278.411 395.772 C 276.828 391.776 284.94 390.523 287.609 389.879 Z"
      />

      <text fill="black" fontSize="130px" x="109.933" y="835.124">
        PRE
      </text>
      <text fill="black" fontSize="110px" x="189.582" y="932.694">
        SCHOOLARIO
      </text>
    </svg>
  );
};

export default Logo;
