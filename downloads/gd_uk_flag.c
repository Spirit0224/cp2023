#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_uk_flag(gdImagePtr img);
void draw_red_sun(gdImagePtr img, int x, int y, int size, int color);
#include <stdio.h>

int main() {
    int height = 12; // 国旗的高度
    int width = 18; // 国旗的宽度

    // 循环打印国旗
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            if ((i >= 0 && i < 6) && (j >= 0 && j < 6)) {
                if (i % 2 == 0 && j % 2 == 0) {
                    printf("*"); // 使用*代表红色十字的一部分
                } else {
                    printf(" "); // 使用空格代表白色部分
                }
            } else if ((i >= 6 && i < 12) && (j >= 0 && j < 6)) {
                if (i % 2 == 0 && j % 2 == 0) {
                    printf("*"); // 使用*代表红色十字的一部分
                } else {
                    printf(" "); // 使用空格代表白色部分
                }
            } else if ((i >= 0 && i < 12) && (j >= 6 && j < 12)) {
                printf("*"); // 使用*代表红色十字的一部分
            } else {
                printf(" "); // 使用空格代表白色背景
            }
        }
        printf("\n"); // 换行以形成国旗的纵向条纹
    }

    return 0;
}