# 从 Super Live 2027 会场周边一览图里裁出发带（先运行下载图片.bat 下载原图）
from PIL import Image
src = 'assets/img/ext/01272751092168f7.jpg'
im = Image.open(src).convert('RGB')
im.crop((1100, 780, 1430, 1112)).save('assets/img/ext/superlive27-hairband3.jpg', quality=92)
im.crop((1272, 935, 1418, 1058)).resize((292, 246), Image.LANCZOS).save('assets/img/ext/superlive27-hairband-maou.jpg', quality=92)
print('ok')
