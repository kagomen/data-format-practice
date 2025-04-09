```bash
# /sample/sample.txtからhelloを含む行を表示
# ファイル名は複数指定可
grep hello sample/sample.txt
# hello grep!

# /sample下のファイルからgrep!を含む行を表示
grep -r grep\! sample
# sample//sample2.txt:good night grep!
# sample//sample2.txt:good morning grep!
# sample//sample.txt:hello grep!
# sample//sample.txt:good bye grep!
# sample//sample/sample.txt:grep! grep!

# /sample下のファイルからgrep!を含む行の数を表示
grep -c -r grep\! grep
# sample/sample2.txt:2
# sample/sample.txt:2
# sample/sample/sample.txt:1
```

| option | description                        |
| ------ | ---------------------------------- |
| -i     | 大文字・小文字を区別しない         |
| -v     | パターンに一致しない行を表示       |
| -n     | 一致した行の行番号も表示           |
| -l     | パターンを含むファイル名のみ表示   |
| -c     | 一致した行数のみ表示               |
| -w     | 単語として完全一致する場合のみ表示 |
| -A n   | 一致した行の後 n 行も表示          |
| -B n   | 一致した行の前 n 行も表示          |
| -C n   | 一致した行の前後 n 行を表示        |
