var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n Spirit0224/cp2023 (github.com) (個人倉儲) \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'W5', 'text': '曲線圖 \n // 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu\n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit\n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\xa0\xa0\n// 主函式\nint main() {\n\xa0\xa0\xa0\xa0// Start a Gnuplot process using popen\n\xa0\xa0\xa0\xa0FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n\xa0\xa0\xa0\xa0if (!gnuplotPipe) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Failed to start Gnuplot.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Use Gnuplot plotting commands, specify font and output as PNG\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "plot sin(x)");\n\xa0\xa0\xa0\xa0// Close popen\n\xa0\xa0\xa0\xa0pclose(gnuplotPipe);\n\xa0\xa0\n\xa0\xa0\xa0\xa0return 0;\n} \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔名： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑   輸出   清除輸出區 清除繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2： \n 1 添加到100 cango_three_gears BSnake的 AI俄羅斯方塊 旋轉塊W \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '台灣國旗 \n // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// cc roc_flag.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\xa0\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\xa0\nint main() {\n\xa0\xa0\xa0\xa0// wdth 3: height 2\n\xa0\xa0\xa0\xa0int width = 1200;\n\xa0\xa0\xa0\xa0int height = (int)(width*2.0 / 3.0);\n\xa0\n\xa0\xa0\xa0\xa0gdImagePtr img = gdImageCreateTrueColor(width, height);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(img, 0);\n\xa0\n\xa0\xa0\xa0\xa0draw_roc_flag(img);\n\xa0\n\xa0\xa0\xa0\xa0FILE *outputFile = fopen("./roc_flag.png", "wb");\n\xa0\xa0\xa0\xa0if (outputFile == NULL) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Error opening the output file.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0gdImagePngEx(img, outputFile, 9);\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\xa0\xa0gdImageDestroy(img);\n\xa0\xa0\xa0\xa0return 0;\n}\n\xa0\nvoid draw_roc_flag(gdImagePtr img) {\n\xa0\xa0\xa0\xa0int width = gdImageSX(img);\n\xa0\xa0\xa0\xa0int height = gdImageSY(img);\n\xa0\xa0\xa0\xa0int red, white, blue;\n\xa0\xa0\xa0\xa0int center_x = (int)(width/4);\n\xa0\xa0\xa0\xa0int center_y = (int)(height/4);\n\xa0\xa0\xa0\xa0int sun_radius = (int)(width/8);\n\xa0\n\xa0\xa0\xa0\xa0// Colors for the flag\n\xa0\xa0\xa0\xa0red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n\xa0\xa0\xa0\xa0white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n\xa0\xa0\xa0\xa0blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\xa0\n\xa0\xa0\xa0\xa0// 繪製紅色矩形區域\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, width, height, red);\n\xa0\n\xa0\xa0\xa0\xa0// 繪製藍色矩形區域\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\xa0\n\xa0\xa0\xa0\xa0// 繪製太陽\n\xa0\xa0\xa0\xa0draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n\xa0\xa0\xa0\xa0float angle = 0;\n\xa0\xa0\xa0\xa0int numRays = 12; // 光芒的數量\n\xa0\n\xa0\xa0\xa0\xa0gdPoint points[3]; // 三個頂點的陣列\n\xa0\n\xa0\xa0\xa0\xa0for (int i = 0; i < numRays; i++) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0angle = i * (2 * M_PI / numRays);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0float x1 = center_x + cos(angle) * sun_radius;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0float y1 = center_y + sin(angle) * sun_radius;\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// 調整兩個底邊頂點的位置\n\xa0\xa0\xa0\xa0\xa0\xa0float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n\xa0\xa0\xa0\xa0\xa0\xa0float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n\xa0\xa0\xa0\xa0\xa0\xa0float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n\xa0\xa0\xa0\xa0\xa0\xa0float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// 設定多邊形的三個頂點\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[0].x = (int)x1;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[0].y = (int)y1;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[1].x = (int)x2;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[1].y = (int)y2;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[2].x = (int)x3;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[2].y = (int)y3;\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0gdImageFilledPolygon(img, points, 3, white);\n\xa0\xa0\xa0\xa0}\n\xa0\xa0//外圈\n\xa0\xa0gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\xa0\n\xa0\xa0\xa0\xa0// 繪製太陽內部\n\xa0\xa0\xa0\xa0gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n \n 美國國旗 \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\xa0\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\xa0\nint main() {\n\xa0\xa0\xa0\xa0int width = 800;\n\xa0\xa0\xa0\xa0int height = (int)(width / 1.9);\n\xa0\n\xa0\xa0\xa0\xa0gdImagePtr img = gdImageCreateTrueColor(width, height);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(img, 0);\n\xa0\n\xa0\xa0\xa0\xa0draw_usa_flag(img);\n\xa0\n\xa0\xa0\xa0\xa0FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n\xa0\xa0\xa0\xa0if (outputFile == NULL) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "打开输出文件时出错。\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\n\xa0\xa0\xa0\xa0gdImagePngEx(img, outputFile, 9);\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\xa0\xa0gdImageDestroy(img);\n\xa0\n\xa0\xa0\xa0\xa0return 0;\n}\n\xa0\nvoid draw_usa_flag(gdImagePtr img) {\n\xa0\xa0\xa0\xa0int width = gdImageSX(img);\n\xa0\xa0\xa0\xa0int height = gdImageSY(img);\n\xa0\xa0\xa0\xa0int red, white, blue;\n\xa0\xa0\xa0\xa0// 国旗颜色\n\xa0\xa0\xa0\xa0red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n\xa0\xa0\xa0\xa0white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n\xa0\xa0\xa0\xa0blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\xa0\n\xa0\xa0\xa0\xa0int stripe_height = height / 13;\n\xa0\xa0\xa0\xa0int stripe_width = width;\n\xa0\xa0\xa0\xa0int star_size = (int)(0.0308 * height); // 星星大小\n\xa0\n\xa0\xa0\xa0\xa0for (int y = 0; y < height; y += stripe_height) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (y / stripe_height % 2 == 0) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} else {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0}\n\xa0\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\xa0\n\xa0\xa0\xa0\xa0int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n\xa0\xa0\xa0\xa0int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n\xa0\xa0\xa0\xa0int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n\xa0\xa0\xa0\xa0int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\xa0\n\xa0\xa0\xa0\xa0for (int row = 0; row < 9; row++) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// 计算2、4、6和8排星星的偏移量\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0for (int star = 0; star < starsPerRow; star++) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int x = star_start_x + star * star_spacing_x + offset_x;\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// 旋转角度（以弧度为单位）\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int y = star_start_y + row * star_spacing_y;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0draw_star(img, x, y, star_size, white, rotation_angle);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0}\n}\n\xa0\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n\xa0\xa0\xa0\xa0gdPoint points[10];\n\xa0\n\xa0\xa0\xa0\xa0for (int i = 0; i < 10; i++) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int radius = (i % 2 == 0) ? size : size / 2;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[i].x = x + radius * cos(angle);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[i].y = y + radius * sin(angle);\n\xa0\xa0\xa0\xa0}\n\xa0\n\xa0\xa0\xa0\xa0// 用指定的颜色填充星星\n\xa0\xa0\xa0\xa0gdImageFilledPolygon(img, points, 10, color);\n} \n \n 日本國旗 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\xa0\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\xa0\nint main() {\n\xa0\xa0\xa0\xa0int originalWidth = 1200;\n\xa0\xa0\xa0\xa0int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n\xa0\xa0\xa0\xa0gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(img, 0);\n\xa0\n\xa0\xa0\xa0\xa0draw_japan_flag(img);\n\xa0\n\xa0\xa0\xa0\xa0// 新的宽度和高度以适应 "images" 文件夹\n\xa0\xa0\xa0\xa0int newWidth = 600;\n\xa0\xa0\xa0\xa0int newHeight = (int)(newWidth * 2.0 / 3.0);\n\xa0\n\xa0\xa0\xa0\xa0// 创建新图像并进行缩放\n\xa0\xa0\xa0\xa0gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(resizedImage, 0);\n\xa0\xa0\xa0\xa0gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\xa0\n\xa0\xa0FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n\xa0\xa0\xa0\xa0if (outputFile == NULL) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Error opening the output file.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0gdImagePng(resizedImage, outputFile);\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\xa0\xa0gdImageDestroy(img);\n\xa0\xa0\xa0\xa0gdImageDestroy(resizedImage);\n\xa0\n\xa0\xa0\xa0\xa0return 0;\n}\n\xa0\nvoid draw_japan_flag(gdImagePtr img) {\n\xa0\xa0\xa0\xa0int width = gdImageSX(img);\n\xa0\xa0\xa0\xa0int height = gdImageSY(img);\n\xa0\n\xa0\xa0\xa0\xa0// 创建一个白色背景\n\xa0\xa0\xa0\xa0int white = gdImageColorAllocate(img, 255, 255, 255);\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\xa0\n\xa0\xa0\xa0\xa0// 绘制红色圆圈（太阳）\n\xa0\xa0\xa0\xa0int red = gdImageColorAllocate(img, 255, 0, 0);\n\xa0\xa0\xa0\xa0int center_x = width / 2;\n\xa0\xa0\xa0\xa0int center_y = height / 2;\n\xa0\xa0\xa0\xa0int radius = (int)((width * 2) / 3);\n\xa0\xa0\xa0\xa0draw_red_sun(img, center_x, center_y, radius, red);\n}\n\xa0\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n\xa0\xa0// 減小 size 的值,例如將他的值減半\n\xa0\xa0size = size / 2;\n\xa0\xa0\xa0\xa0gdImageArc(img, x, y, size, size, 0, 360, color);\n\xa0\xa0\xa0\xa0gdImageFillToBorder(img, x, y, color, color);\n} \n \n \n \n \n \n \n \n \n 中國國旗 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\xa0\nvoid draw_proc_flag(gdImagePtr img);\n\xa0\nint main() {\n\xa0\xa0\xa0\xa0int width = 300; // 國旗寬度\n\xa0\xa0\xa0\xa0int height = 200; // 國旗高度\n\xa0\n\n\n\xa0\xa0\xa0\xa0gdImagePtr im = gdImageCreateTrueColor(width, height);\n\xa0\xa0\xa0\xa0gdImageAlphaBlending(im, 0);\n\xa0\n\xa0\xa0\xa0\xa0draw_proc_flag(im);\n\xa0\n\xa0\xa0\xa0\xa0FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n\xa0\xa0\xa0\xa0if (outputFile == NULL) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "打開輸出檔案時出錯。\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\n\xa0\xa0\xa0\xa0gdImagePngEx(im, outputFile, 9);\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\xa0\xa0gdImageDestroy(im);\n\xa0\n\xa0\xa0\xa0\xa0return 0;\n}\n\xa0\n// 聲明 draw_star 函數\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\xa0\nvoid draw_proc_flag(gdImagePtr img) {\n\xa0\xa0\xa0\xa0int width = gdImageSX(img);\n\xa0\xa0\xa0\xa0int height = gdImageSY(img);\n\xa0\xa0\xa0\xa0int red, yellow;\n\xa0\n\xa0\xa0\xa0\xa0// 國旗顏色\n\xa0\xa0\xa0\xa0red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n\xa0\xa0\xa0\xa0yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\xa0\n\xa0\xa0\xa0\xa0// 畫紅色背景\n\xa0\xa0\xa0\xa0gdImageFilledRectangle(img, 0, 0, width, height, red);\n\xa0\n\xa0\xa0\xa0\xa0// 設置星星的大小和位置\n\xa0\xa0\xa0\xa0int star_size = (int)(0.28 * height);\n\xa0\xa0\xa0\xa0int star_x = (int)(0.165 * width);\n\xa0\xa0\xa0\xa0int star_y = (int)(0.265 * height);\n\xa0\n\xa0\xa0\xa0\xa0// 畫大星星\n\xa0\xa0\xa0\xa0draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\xa0\n\xa0\xa0\xa0\xa0// 繪製小星星，位置根據實際國旗比例計算\n\xa0\xa0\xa0\xa0double radius = 0.15 * height;\n\xa0\xa0\xa0\xa0double angle = 360 / 7 * M_PI / 179.0;\n\xa0\xa0\xa0\xa0double rotation = -M_PI / 7.5;\n\xa0\xa0\xa0\xa0int cx = (int)(0.32 * width);\n\xa0\xa0\xa0\xa0int cy = (int)(0.27 * height);\n\xa0\n\xa0\xa0\xa0\xa0for (int i = -1; i < 3; i++) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int x = (int)(cx + radius * cos(i * angle + rotation));\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0int y = (int)(cy + radius * sin(i * angle + rotation));\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n\xa0\xa0\xa0\xa0}\n}\n\xa0\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n\xa0\xa0\xa0\xa0gdPoint points[10];\n\xa0\n\xa0\xa0\xa0\xa0// 計算星形的五個外點和五個內點\n\xa0\xa0\xa0\xa0double outer_radius = size / 2;\n\xa0\xa0\xa0\xa0double inner_radius = size / 6;\n\xa0\xa0\xa0\xa0double angle = M_PI / 5.0;\n\xa0\n\xa0\xa0\xa0\xa0for (int i = 0; i < 10; i++) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0double theta = rotation_angle + i * angle;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[i].x = x + radius * cos(theta);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0points[i].y = y + radius * sin(theta);\n\xa0\xa0\xa0\xa0}\n\xa0\n\xa0\xa0\xa0\xa0// 使用 gdImageFilledPolygon 繪製星形\n\xa0\xa0\xa0\xa0gdImageFilledPolygon(img, points, 10, color);\n} \n \n \n \n \n \n \n \n \n \n \n \n \n \n 英國國旗 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n\n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 绘制英国国旗\n    draw_uk_flag(img);\n\n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\n\n\nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n\n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n\n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n\n    int x1, y1, x2, y2, x3, y3;\n\n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n\n\n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n\n  int x1, y1, x2, y2, x3, y3;\n\n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n\n\n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  }\n\n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n\n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n}\n \n \n 含國國旗 \n //https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W12', 'text': 'GD圖 \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n\n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n\n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("hellogd1.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n\n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n\n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n\n    // Call the rotation function\n    rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 45.0, points, 4);\n    gdImagePolygon(img, points, 4, black);\n\n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n\n    // Call the rotation function\n    rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n\n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n\n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("./../images/hellogd2.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n\n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n\n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n\n    // Call the rotation function multiple times\n    for (int i = 0; i < 4; i++) {\n        rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 30.0, points, 4);\n        gdImagePolygon(img, points, 4, black);\n    }\n\n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n\n    // Call the rotation function multiple times\n    for (int i = 0; i < 12; i++) {\n        //rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n        rotateFilledPolygon(500, 200, 30.0, points2, 4);\n        gdImageFilledPolygon(img, points2, 4, red);\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '這學期的計算機程式學了倉儲的運用及Python跟C語言的簡單用法,這學期還用到了用C語言繪製國旗。讓我知道程式語言不單僅僅是寫程式還可以繪製圖片。學習程式對於我們未來工作很有幫助。我們得CNC也要用到程式。所以我們必須讓機械與繪圖與程式結合。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W15', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    printf("%d,%d\\n",ax, ay);\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    printf("A coord: (%d,%d)\\n", points[0].x, points[0].y);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    printf("B coord: (%d,%d)\\n", points[1].x, points[1].y);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    printf("E coord: (%d,%d)\\n", points[2].x, points[2].y);\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    printf("D coord: (%d,%d)\\n\\n", points[2].x, points[2].y);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n', 'tags': '', 'url': 'W15.html'}, {'title': '課程評分', 'text': '課程評分 : \n 線上測驗、個人期望成績 、 期中網站與簡報、期末網站與簡報. \n 線上測驗 : \n 建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報 : \n 期中考前兩週開始進行. \n 期末網站評分與簡報 : \n 期末考前兩週開始進行. \n 期中成績計算 : \n 期中考與之前各週線上測驗成績平均 \n 學期成績計算 : \n (期中成績與之後各週線上測驗成績平均)*60%+(期中網站與簡報成績)*20%+(期末網站與簡報成績)*20% \n (課後需要花許多時間練習) \n \n \n', 'tags': '', 'url': '課程評分.html'}]};