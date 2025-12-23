# SillyTavern 服务器插件演示仓库

这个仓库用于演示 **SillyTavern 服务端插件** 的加载流程。插件启动时会写入一个固定文本文件，方便验证插件拥有文件写入权限。

## 使用方法

1. 将本仓库拷贝或克隆到你的 SillyTavern 实例的 `plugins/` 目录下：

   ```bash
   git clone <本仓库地址> /path/to/SillyTavern/plugins/proof-write-text
   ```

2. 在 `config.yaml` 中启用服务端插件：

   ```yaml
   enableServerPlugins: true
   ```

3. 启动 SillyTavern 服务端。

4. 启动后检查文件：

   - 位置：`data/plugin-proof.txt`
   - 内容：`SillyTavern plugin proof: init executed and wrote this file.`

控制台会输出写入路径，便于确认插件生效。
