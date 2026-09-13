// Keep Shot website — translations for Privacy & Support pages.
// Auto language detection with English fallback is handled in the HTML files.
window.I18N = {
  en: {
    name: "English",
    nav: { home: "Home", privacy: "Privacy Policy", support: "Support" },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: September 13, 2026",
      sections: [
        { h: "1. Overview", p: "Keep Shot is an iOS app that helps you organize your photo library and free up storage by finding duplicate, similar, blurry, and unwanted photos. Your privacy is central to how the app is built: by default, <strong>all analysis happens on your device</strong>, and your photos are <strong>not uploaded</strong> to any server." },
        { h: "2. Information We Collect", p: "We do not require an account and we do not collect personal information such as your name, email, or location. The only user data the app accesses is your <strong>Photos and Videos</strong>, used solely to provide the app's functionality (finding duplicates, similar shots, blur, etc.). This data is <strong>not linked to you</strong> and is <strong>not used for tracking</strong>." },
        { h: "3. On-Device Processing", p: "Scanning, perceptual hashing, similarity grouping, blur detection, and best-photo ranking run locally on your iPhone. Photo files are read only to analyze them; they are never sent off the device unless you explicitly enable Cloud AI (see below)." },
        { h: "4. Optional Cloud AI (Pro)", p: "Cloud AI is an optional feature. When you turn it on, only the content you choose to analyze is sent over an encrypted HTTPS connection to the AI provider <em>you</em> configure. We do not store your photos, and the app is designed so that API keys are never embedded in the app bundle." },
        { h: "5. Deletion &amp; Backup", p: "When you clean photos, they are moved to the iPhone <strong>“Recently Deleted”</strong> album and remain recoverable for 30 days — they are never permanently deleted without your explicit choice. The optional backup feature copies photos to a location <em>you</em> choose (Mac, PC, or external SSD) and verifies each file with a hash before any removal." },
        { h: "6. Data Retention", p: "Because analysis is on-device and we operate no user-photo servers, we do not retain copies of your photos. Local analysis results (hashes, scores) are stored only in the app's private sandbox on your device and are removed when you delete the app." },
        { h: "7. Children", p: "The app is rated 4+ and is not directed at children under 13. We do not knowingly collect any data from children." },
        { h: "8. Your Rights", p: "As we do not store your photos on our servers, you can exercise your rights simply by deleting the app. For any question about this policy, contact us below." },
        { h: "9. Changes", p: "We may update this policy from time to time. Material changes will be reflected by the “Last updated” date above." },
        { h: "10. Contact", p: 'Email: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Issues: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "For privacy questions, email us or open a GitHub issue — we typically reply within a few business days."
    },
    support: {
      title: "Support",
      contact: 'Email: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Issues &amp; feedback: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "Photo permission denied", a: "Go to <strong>Settings → Keep Shot</strong> on your iPhone and allow photo access, then reopen the app." },
        { q: "Storage unavailable", a: "Free up space on the destination (iPhone or external drive) and try the backup again." },
        { q: "Backup interrupted", a: "Already-transferred files are not duplicated. Reconnect and resume — the app continues from where it left off." },
        { q: "Verification failed", a: "If a file fails hash verification, it is <strong>never deleted</strong> from your library. Re-run the backup for that item." },
        { q: "Delete failed", a: "Some photos could not be deleted. Wait a moment and retry; items that failed stay in your library." },
        { q: "How do I recover cleaned photos?", a: "Cleaned photos go to the iPhone <strong>“Recently Deleted”</strong> album and can be recovered within 30 days." },
        { q: "How does backup work?", a: "Copy → Verify (hash) → Delete. The app always verifies a file before removing the original, so your photos are never lost." }
      ]
    }
  },

  zh: {
    name: "中文",
    nav: { home: "首页", privacy: "隐私政策", support: "支持" },
    privacy: {
      title: "隐私政策",
      updated: "最后更新：2026 年 9 月 13 日",
      sections: [
        { h: "1. 概述", p: "Keep Shot 是一款 iOS 相册整理工具，用于发现重复、相似、模糊及不需要的照片，帮你释放存储空间。隐私是我们的设计核心：默认情况下，<strong>所有分析都在你的设备上进行</strong>，你的照片<strong>不会上传</strong>到任何服务器。" },
        { h: "2. 我们收集的信息", p: "我们不需注册账号，也不收集姓名、邮箱或位置等个人信息。应用唯一访问的用户数据是你的<strong>照片与视频</strong>，仅用于实现应用功能（查找重复、相似、模糊照片等）。这些数据<strong>不与你关联</strong>，也<strong>不用于跟踪</strong>。" },
        { h: "3. 设备端处理", p: "扫描、感知哈希、相似分组、模糊检测与最佳照片排序均在 iPhone 本地运行。照片仅被读取以做分析，<strong>不会离开设备</strong>，除非你主动开启云端 AI（见下）。" },
        { h: "4. 可选的云端 AI（Pro）", p: "云端 AI 为可选功能。开启后，仅你选择分析的内容会通过加密的 HTTPS 连接发送到<strong>你自行配置</strong>的 AI 服务商。我们不存储你的照片，且应用设计上<strong>不会把 API Key 写入安装包</strong>。" },
        { h: "5. 删除与备份", p: "清理照片时，它们会被移入 iPhone 的<strong>「最近删除」</strong>相簿，30 天内可恢复——除非你明确选择，否则绝不永久删除。可选的备份功能会把照片复制到<strong>你选择</strong>的位置（Mac / PC / 外接 SSD），并在删除前逐张做哈希校验。" },
        { h: "6. 数据保留", p: "由于分析在设备端完成、我们也未运营存储用户照片的服务器，我们<strong>不保留你的照片副本</strong>。本地的分析结果（哈希、评分）仅存于应用私有沙盒，卸载应用后即被清除。" },
        { h: "7. 儿童", p: "本应用评级为 4+，不面向 13 岁以下儿童，我们不会有意收集任何儿童的数据。" },
        { h: "8. 你的权利", p: "由于我们不在服务器上存储你的照片，你只需卸载应用即可行使相关权利。对本政策有任何疑问，请通过下方方式联系我们。" },
        { h: "9. 变更", p: "我们可能不时更新本政策，重大变更会以上方的「最后更新」日期体现。" },
        { h: "10. 联系我们", p: '邮箱：<a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>问题反馈：<a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "隐私相关问题请发邮件或提交 GitHub Issue，我们通常会在几个工作日内回复。"
    },
    support: {
      title: "支持",
      contact: '邮箱：<a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>问题与反馈：<a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "照片权限被拒", a: "请在 iPhone 的<strong>「设置 → Keep Shot」</strong>中允许照片访问，再重新打开应用。" },
        { q: "存储空间不足", a: "请清理目标位置（iPhone 或外接磁盘）的空间后重试备份。" },
        { q: "备份中断", a: "已传输的文件不会重复传输。重新连接后续传即可，应用会从中断处继续。" },
        { q: "验证失败", a: "若文件哈希校验失败，它<strong>不会被删除</strong>。请对该项目重新备份。" },
        { q: "删除失败", a: "部分照片无法删除时，请稍后重试，未成功删除的会保留在相册中。" },
        { q: "如何恢复已清理的照片？", a: "被清理的照片会进入 iPhone 的<strong>「最近删除」</strong>相簿，30 天内可恢复。" },
        { q: "备份如何工作？", a: "流程为：复制 → 校验（哈希）→ 删除。应用始终先校验再删除原文件，确保照片不丢失。" }
      ]
    }
  },

  ja: {
    name: "日本語",
    nav: { home: "ホーム", privacy: "プライバシーポリシー", support: "サポート" },
    privacy: {
      title: "プライバシーポリシー",
      updated: "最終更新：2026年9月13日",
      sections: [
        { h: "1. 概要", p: "Keep Shot は、重複・類似・ぼやけ・不要な写真を見つけて写真ライブラリを整理し、ストレージを空けるための iOS アプリです。プライバシーは設計の中心です。既定では<strong>すべての分析が端末上で行われ</strong>、写真が<strong>どのサーバーにもアップロードされません</strong>。" },
        { h: "2. 収集する情報", p: "アカウントは不要で、氏名・メール・位置情報などの個人情報は収集しません。アプリがアクセスするユーザーデータは<strong>写真とビデオ</strong>のみで、アプリの機能（重複・類似・ぼやけの検出など）の提供にのみ使用します。このデータは<strong>あなたに紐付けられず</strong>、<strong>追跡にも使用されません</strong>。" },
        { h: "3. 端末内での処理", p: "スキャン、知覚ハッシュ、類似グループ化、ぼやけ検出、最良写真の順位付けはすべて iPhone 上でローカルに実行されます。写真ファイルは分析のためにのみ読み取られ、明示的にクラウド AI を有効にしない限り<strong>端末外に送信されることはありません</strong>。" },
        { h: "4. オプションのクラウド AI（Pro）", p: "クラウド AI はオプション機能です。有効にすると、分析対象として選んだコンテンツのみが、暗号化された HTTPS 接続で<em>あなたが</em>設定した AI プロバイダーに送信されます。写真は保存せず、API キーがアプリのパッケージに埋め込まれないよう設計されています。" },
        { h: "5. 削除とバックアップ", p: "写真を整理すると、iPhone の<strong>「最近削除」</strong>アルバムに移動し、30 日間は復元可能です。あなたが明示的に選ばない限り、永久に削除されることはありません。オプションのバックアップ機能は、<em>あなたが</em>選んだ場所（Mac・PC・外付け SSD）に写真をコピーし、削除前に各ファイルをハッシュで検証します。" },
        { h: "6. データの保持", p: "分析は端末内で行われ、ユーザー写真を保存するサーバーを運用していないため、写真のコピーは保持しません。ローカルの分析結果（ハッシュ・スコア）は端末のアプリ専用サンドボックスにのみ保存され、アプリを削除すると削除されます。" },
        { h: "7. 児童", p: "本アプリは 4+ 指定で、13 歳未満の児童向けではありません。児童のデータを意図的に収集することはありません。" },
        { h: "8. あなたの権利", p: "サーバーに写真を保存していないため、アプリを削除するだけで権利を行使できます。本ポリシーに関するご質問は、下記までお問い合わせください。" },
        { h: "9. 変更", p: "本ポリシーは随時更新されることがあります。重要な変更は上記の「最終更新」日で示されます。" },
        { h: "10. お問い合わせ", p: 'メール：<a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>問題報告：<a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "プライバシーに関するご質問はメールまたは GitHub Issue でお寄せください。通常数営業日以内に返信します。"
    },
    support: {
      title: "サポート",
      contact: 'メール：<a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>問題・ご意見：<a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "写真へのアクセスが拒否された", a: "iPhone の<strong>「設定 → Keep Shot」</strong>で写真へのアクセスを許可し、アプリを再度開いてください。" },
        { q: "ストレージが不足している", a: "保存先（iPhone または外付けドライブ）の空き容量を確保してからバックアップをやり直してください。" },
        { q: "バックアップが中断された", a: "すでに転送済みのファイルは重複して転送されません。再接続して再開すると、中断した箇所から続きます。" },
        { q: "検証に失敗した", a: "ファイルのハッシュ検証が失敗した場合、ライブラリから<strong>削除されることはありません</strong>。その項目を再度バックアップしてください。" },
        { q: "削除に失敗した", a: "一部の写真を削除できなかった場合は、しばらく待ってから再試行してください。失敗した項目はライブラリに残ります。" },
        { q: "整理した写真を復元するには？", a: "整理した写真は iPhone の<strong>「最近削除」</strong>アルバムに入り、30 日以内であれば復元できます。" },
        { q: "バックアップの仕組みは？", a: "コピー → 検証（ハッシュ）→ 削除。アプリは元ファイルを削除する前に必ず検証するため、写真を失うことはありません。" }
      ]
    }
  },

  ko: {
    name: "한국어",
    nav: { home: "홈", privacy: "개인정보 처리방침", support: "지원" },
    privacy: {
      title: "개인정보 처리방침",
      updated: "최종 업데이트: 2026년 9월 13일",
      sections: [
        { h: "1. 개요", p: "Keep Shot은 중복·유사·흐릿한 사진과 불필요한 사진을 찾아 사진 라이브러리를 정리하고 저장 공간을 확보하는 iOS 앱입니다. 개인정보 보호는 앱 설계의 핵심입니다. 기본적으로 <strong>모든 분석은 기기에서 수행</strong>되며, 사진은 <strong>어떤 서버에도 업로드되지 않습니다</strong>." },
        { h: "2. 수집하는 정보", p: "계정은 필요 없으며 이름·이메일·위치 등 개인정보는 수집하지 않습니다. 앱이 접근하는 유일한 사용자 데이터는 <strong>사진 및 동영상</strong>으로, 앱 기능(중복·유사·흐림 검출 등) 제공에만 사용됩니다. 이 데이터는 <strong>사용자와 연결되지 않으며</strong> <strong>추적에도 사용되지 않습니다</strong>." },
        { h: "3. 기기 내 처리", p: "스캔, 지각 해시, 유사 그룹화, 흐림 감지, 최적 사진 순위는 iPhone에서 로컬로 실행됩니다. 사진 파일은 분석을 위해서만 읽히며, 명시적으로 클라우드 AI를 켜지 않는 한 <strong>기기 밖으로 전송되지 않습니다</strong>." },
        { h: "4. 선택적 클라우드 AI(Pro)", p: "클라우드 AI는 선택 기능입니다. 켜면 분석하도록 선택한 콘텐츠만 암호화된 HTTPS 연결로 <em>사용자가</em> 설정한 AI 제공자에게 전송됩니다. 사진은 저장하지 않으며, API 키가 앱 번들에 포함되지 않도록 설계되었습니다." },
        { h: "5. 삭제 및 백업", p: "사진을 정리하면 iPhone의 <strong>“최근 삭제됨”</strong> 앨범으로 이동해 30일간 복구 가능합니다. 명시적으로 선택하지 않는 한 영구 삭제되지 않습니다. 선택적 백업 기능은 <em>사용자가</em> 선택한 위치(Mac·PC·외장 SSD)에 사진을 복사하고, 삭제 전에 각 파일을 해시로 검증합니다." },
        { h: "6. 데이터 보관", p: "분석은 기기 내에서 수행되고 사용자 사진을 저장하는 서버를 운영하지 않으므로 사진 사본을 보관하지 않습니다. 로컬 분석 결과(해시·점수)는 기기의 앱 전용 샌드박스에만 저장되며 앱 삭제 시 제거됩니다." },
        { h: "7. 아동", p: "이 앱은 4+ 등급이며 13세 미만 아동을 대상으로 하지 않습니다. 아동의 데이터를 의도적으로 수집하지 않습니다." },
        { h: "8. 귀하의 권리", p: "서버에 사진을 저장하지 않으므로 앱을 삭제하는 것만으로 권리를 행사할 수 있습니다. 이 정책에 대해 궁금한 점은 아래로 연락해 주세요." },
        { h: "9. 변경", p: "이 정책은 때때로 업데이트될 수 있습니다. 중요한 변경은 위의 “최종 업데이트” 날짜로 표시됩니다." },
        { h: "10. 문의", p: '이메일: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>문제 제보: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "개인정보 관련 문의는 이메일이나 GitHub Issue로 보내주세요. 보통 영업일 기준 며칠 이내에 답장합니다."
    },
    support: {
      title: "지원",
      contact: '이메일: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>문제 및 피드백: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "사진 접근이 거부됨", a: "iPhone의 <strong>“설정 → Keep Shot”</strong>에서 사진 접근을 허용한 후 앱을 다시 여세요." },
        { q: "저장 공간 부족", a: "대상(iPhone 또는 외장 드라이브)의 공간을 확보한 후 백업을 다시 시도하세요." },
        { q: "백업이 중단됨", a: "이미 전송된 파일은 중복 전송되지 않습니다. 다시 연결해 이어서 진행하면 중단한 지점부터 계속됩니다." },
        { q: "검증 실패", a: "파일 해시 검증에 실패하면 라이브러리에서 <strong>삭제되지 않습니다</strong>. 해당 항목을 다시 백업하세요." },
        { q: "삭제 실패", a: "일부 사진을 삭제하지 못했다면 잠시 후 다시 시도하세요. 실패한 항목은 라이브러리에 남습니다." },
        { q: "정리한 사진을 복구하려면?", a: "정리한 사진은 iPhone의 <strong>“최근 삭제됨”</strong> 앨범으로 가며 30일 이내에 복구할 수 있습니다." },
        { q: "백업은 어떻게 작동하나요?", a: "복사 → 검증(해시) → 삭제. 앱은 원본을 삭제하기 전에 항상 검증하므로 사진을 잃지 않습니다." }
      ]
    }
  },

  th: {
    name: "ไทย",
    nav: { home: "หน้าแรก", privacy: "นโยบายความเป็นส่วนตัว", support: "สนับสนุน" },
    privacy: {
      title: "นโยบายความเป็นส่วนตัว",
      updated: "อัปเดตล่าสุด: 13 กันยายน 2026",
      sections: [
        { h: "1. ภาพรวม", p: "Keep Shot เป็นแอป iOS ที่ช่วยจัดระเบียบคลังรูปภาพและปลดพื้นที่โดยหารูปซ้ำ คล้าย จาง และไม่ต้องการ Keep Shot ให้ความสำคัญกับความเป็นส่วนตัว: ตามค่าเริ่มต้น <strong>การวิเคราะห์ทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณ</strong> และรูปภาพ<strong>ไม่ถูกอัปโหลด</strong>ไปยังเซิร์ฟเวอร์ใดๆ" },
        { h: "2. ข้อมูลที่เรารวบรวม", p: "เราไม่ต้องการบัญชีและไม่เก็บข้อมูลส่วนบุคคลเช่น ชื่อ อีเมล หรือตำแหน่ง ข้อมูลผู้ใช้เดียวที่แอปเข้าถึงคือ <strong>รูปภาพและวิดีโอ</strong> ซึ่งใช้เพื่อให้ฟังก์ชันแอปเท่านั้น (หารูปซ้ำ คล้าย จาง ฯลฯ) ข้อมูลนี้ <strong>ไม่ผูกกับตัวคุณ</strong> และ <strong>ไม่นำไปใช้ติดตาม</strong>" },
        { h: "3. การประมวลผลบนอุปกรณ์", p: "การสแกน การแฮชระดับการรับรู้ การจัดกลุ่มคล้าย การตรวจจับความจาง และการจัดอันดับรูปที่ดีที่สุด ทำงานแบบโลคอลบน iPhone ไฟล์รูปถูกอ่านเพื่อวิเคราะห์เท่านั้น และจะไม่ถูกส่งออกจากอุปกรณ์ เว้นแต่คุณจะเปิดคลาวด์ AI อย่างชัดเจน (ดูด้านล่าง)" },
        { h: "4. คลาวด์ AI แบบเลือกได้ (Pro)", p: "คลาวด์ AI เป็นฟีเจอร์แบบเลือกได้ เมื่อเปิดใช้ จะมีเพียงเนื้อหาที่คุณเลือกวิเคราะห์เท่านั้นที่ถูกส่งผ่านการเชื่อมต่อ HTTPS ที่เข้ารหัสไปยังผู้ให้บริการ AI <em>ที่คุณ</em> กำหนด เราไม่เก็บรูปของคุณ และออกแบบแอปให้คีย์ API ไม่ถูกฝังในแพ็กเกจแอป" },
        { h: "5. การลบและการสำรอง", p: "เมื่อคุณจัดการรูป รูปจะถูกย้ายไปยังอัลบั้ม <strong>“ลบ recently”</strong> ของ iPhone และกู้คืนได้ภายใน 30 วัน — จะไม่ถูกลบถาวรหากคุณไม่เลือกเอง ฟีเจอร์สำรองแบบเลือกได้จะคัดลอกรูปไปยังตำแหน่ง <em>ที่คุณ</em> เลือก (Mac PC หรือ SSD ภายนอก) และตรวจสอบแฮชของแต่ละไฟล์ก่อนลบ" },
        { h: "6. การเก็บรักษาข้อมูล", p: "เนื่องจากการวิเคราะห์อยู่บนอุปกรณ์และเราไม่มีเซิร์ฟเวอร์เก็บรูปผู้ใช้ เราจึงไม่เก็บสำเนารูปของคุณ ผลการวิเคราะห์ในเครื่อง (แฮช คะแนน) ถูกเก็บเฉพาะในพื้นที่แซนด์บ็อกซ์ของแอปบนอุปกรณ์และถูกลบเมื่อคุณลบแอป" },
        { h: "7. เด็ก", p: "แอปได้รับเรตติ้ง 4+ และไม่มุ่งเป้าหมายเด็กต่ำกว่า 13 ปี เราไม่เก็บข้อมูลเด็กโดยเจตนา" },
        { h: "8. สิทธิ์ของคุณ", p: "เนื่องจากเราไม่เก็บรูปของคุณในเซิร์ฟเวอร์ คุณใช้สิทธิ์ได้โดยการลบแอป หากมีคำถามเกี่ยวกับนโยบายนี้ ติดต่อเราด้านล่าง" },
        { h: "9. การเปลี่ยนแปลง", p: "เราอาจอัปเดตนโยบายนี้เป็นระยะ การเปลี่ยนที่สำคัญจะแสดงผ่านวันที่ “อัปเดตล่าสุด” ด้านบน" },
        { h: "10. ติดต่อ", p: 'อีเมล: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>ปัญหา: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "หากมีคำถามเรื่องความเป็นส่วนตัว ส่งอีเมลหรือเปิด GitHub Issue — เรามักตอบภายในไม่กี่วันทำการ"
    },
    support: {
      title: "สนับสนุน",
      contact: 'อีเมล: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>ปัญหาและข้อเสนอแนะ: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "การเข้าถึงรูปถูกปฏิเสธ", a: "ไปที่ <strong>การตั้งค่า → Keep Shot</strong> บน iPhone แล้วอนุญาตการเข้าถึงรูป จากนั้นเปิดแอปใหม่" },
        { q: "พื้นที่จัดเก็บไม่พอ", a: "ปลดพื้นที่ปลายทาง (iPhone หรือดิสก์ภายนอก) แล้วลองสำรองใหม่" },
        { q: "การสำรองถูกขัดจังหวะ", a: "ไฟล์ที่โอนแล้วไม่ถูกโอนซ้ำ เชื่อมต่อใหม่แล้วทำต่อ — แอปจะต่อจากจุดที่หยุด" },
        { q: "การตรวจสอบล้มเหลว", a: "หากไฟล์ไม่ผ่านการตรวจสอบแฮช มันจะ <strong>ไม่ถูกลบ</strong> จากคลังของคุณ ให้รันสำรองรายการนั้นใหม่" },
        { q: "การลบล้มเหลว", a: "ลบรูปบางรูปไม่ได้ กรุณารอสักครู่แล้วลองใหม่ รายการที่ล้มเหลวจะคงอยู่ในคลัง" },
        { q: "กู้คืนรูปที่จัดการแล้วได้อย่างไร?", a: "รูปที่จัดการแล้วจะเข้าอัลบั้ม <strong>“ลบ recently”</strong> ของ iPhone และกู้คืนได้ภายใน 30 วัน" },
        { q: "การสำรองทำงานอย่างไร?", a: "คัดลอก → ตรวจสอบ (แฮช) → ลบ แอปตรวจสอบไฟล์ก่อนลบต้นฉบับเสมอ จึงไม่สูญเสียรูป" }
      ]
    }
  },

  fr: {
    name: "Français",
    nav: { home: "Accueil", privacy: "Politique de confidentialité", support: "Assistance" },
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 13 septembre 2026",
      sections: [
        { h: "1. Aperçu", p: "Keep Shot est une app iOS qui aide à organiser votre photothèque et à libérer de l’espace en trouvant les photos en double, similaires, floues et indésirables. Votre confidentialité est au cœur de la conception : par défaut, <strong>toute l’analyse a lieu sur votre appareil</strong> et vos photos <strong>ne sont pas téléversées</strong> vers un serveur." },
        { h: "2. Informations collectées", p: "Aucun compte n’est requis et nous ne collectons aucune information personnelle (nom, e-mail, position). La seule donnée utilisateur à laquelle l’app accède est votre <strong>photothèque</strong>, utilisée uniquement pour ses fonctionnalités (doublons, similaires, flou…). Ces données <strong>ne sont pas liées à vous</strong> et <strong>ne servent pas au suivi</strong>." },
        { h: "3. Traitement sur l’appareil", p: "L’analyse, le hachage perceptuel, le regroupement, la détection de flou et le classement des meilleures photos s’exécutent localement sur votre iPhone. Les fichiers sont lus pour analyse uniquement ; ils ne quittent jamais l’appareil sauf si vous activez explicitement l’IA cloud (voir plus bas)." },
        { h: "4. IA cloud optionnelle (Pro)", p: "L’IA cloud est optionnelle. Quand vous l’activez, seul le contenu que vous choisissez d’analyser est envoyé via HTTPS chiffré au fournisseur d’IA <em>que vous</em> configurez. Nous ne stockons pas vos photos et l’app est conçue pour que les clés API ne soient jamais intégrées au bundle." },
        { h: "5. Suppression et sauvegarde", p: "En nettoyant des photos, elles passent dans l’album iPhone <strong>« Récemment supprimés »</strong> et restent récupérables 30 jours — rien n’est supprimé définitivement sans votre choix explicite. La sauvegarde optionnelle copie les photos à un endroit <em>que vous</em> choisissez (Mac, PC ou SSD externe) et vérifie chaque fichier par hachage avant toute suppression." },
        { h: "6. Conservation des données", p: "Comme l’analyse est sur l’appareil et que nous n’exploitons aucun serveur de photos utilisateurs, nous ne conservons aucune copie de vos photos. Les résultats locaux (hachages, scores) sont stockés uniquement dans le bac à sable de l’app et supprimés quand vous désinstallez." },
        { h: "7. Enfants", p: "L’app est classée 4+ et ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons aucune donnée d’enfant sciemment." },
        { h: "8. Vos droits", p: "Comme nous ne stockons pas vos photos sur nos serveurs, vous exercez vos droits simplement en désinstallant l’app. Pour toute question, contactez-nous ci-dessous." },
        { h: "9. Modifications", p: "Cette politique peut être mise à jour occasionnellement. Les changements importants sont indiqués par la date « Dernière mise à jour » ci-dessus." },
        { h: "10. Contact", p: 'E-mail : <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problèmes : <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "Pour les questions de confidentialité, écrivez-nous ou ouvrez un GitHub Issue — nous répondons généralement sous quelques jours ouvrés."
    },
    support: {
      title: "Assistance",
      contact: 'E-mail : <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problèmes et retours : <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "Accès aux photos refusé", a: "Allez dans <strong>Réglages → Keep Shot</strong> sur votre iPhone et autorisez l’accès aux photos, puis rouvrez l’app." },
        { q: "Espace insuffisant", a: "Libérez de l’espace sur la destination (iPhone ou disque externe) puis relancez la sauvegarde." },
        { q: "Sauvegarde interrompue", a: "Les fichiers déjà transférés ne sont pas dupliqués. Reconnectez et reprenez — l’app continue où elle s’était arrêtée." },
        { q: "Vérification échouée", a: "Si un fichier échoue à la vérification par hachage, il n’est <strong>jamais supprimé</strong> de votre photothèque. Relancez la sauvegarde de cet élément." },
        { q: "Suppression échouée", a: "Certaines photos n’ont pas pu être supprimées. Attendez un instant et réessayez ; les éléments en échec restent dans votre photothèque." },
        { q: "Comment récupérer les photos nettoyées ?", a: "Les photos nettoyées vont dans l’album iPhone <strong>« Récemment supprimés »</strong> et peuvent être récupérées sous 30 jours." },
        { q: "Comment fonctionne la sauvegarde ?", a: "Copier → Vérifier (hachage) → Supprimer. L’app vérifie toujours un fichier avant de retirer l’original, vos photos ne sont jamais perdues." }
      ]
    }
  },

  de: {
    name: "Deutsch",
    nav: { home: "Start", privacy: "Datenschutz", support: "Support" },
    privacy: {
      title: "Datenschutz",
      updated: "Zuletzt aktualisiert: 13. September 2026",
      sections: [
        { h: "1. Übersicht", p: "Keep Shot ist eine iOS-App, die deine Fotobibliothek organisiert und Speicher freigibt, indem sie Duplikate, ähnliche, unscharfe und unerwünschte Fotos findet. Datenschutz steht im Mittelpunkt: standardmäßig <strong>findet die gesamte Analyse auf deinem Gerät statt</strong> und deine Fotos werden <strong>nicht hochgeladen</strong>." },
        { h: "2. Erhobene Informationen", p: "Wir benötigen kein Konto und erheben keine personenbezogenen Daten wie Name, E-Mail oder Standort. Die einzige Nutzerdaten, auf die die App zugreift, sind deine <strong>Fotos und Videos</strong>, die ausschließlich der Funktion dienen (Duplikate, ähnliche, unscharfe Fotos …). Diese Daten sind <strong>nicht mit dir verknüpft</strong> und <strong>werden nicht zum Tracking genutzt</strong>." },
        { h: "3. Verarbeitung auf dem Gerät", p: "Scan, perceptueller Hash, Ähnlichkeitsgruppierung, Unschärfeerkennung und Best-of-Ranking laufen lokal auf deinem iPhone. Fotos werden nur zum Analysieren gelesen; sie verlassen das Gerät nie, es sei denn, du aktivierst ausdrücklich die Cloud-KI (siehe unten)." },
        { h: "4. Optionale Cloud-KI (Pro)", p: "Die Cloud-KI ist optional. Wenn du sie aktivierst, wird nur der von dir zum Analysieren ausgewählte Inhalt über eine verschlüsselte HTTPS-Verbindung an den <em>von dir</em> konfigurierten KI-Anbieter gesendet. Wir speichern deine Fotos nicht, und die App ist so gestaltet, dass API-Schlüssel nie im Bundle eingebettet sind." },
        { h: "5. Löschen und Sichern", p: "Beim Aufräumen werden Fotos in das iPhone-Album <strong>„Kürzlich gelöscht“</strong> verschoben und bleiben 30 Tage wiederherstellbar — sie werden ohne deine ausdrückliche Wahl nie endgültig gelöscht. Die optionale Sicherung kopiert Fotos an einen <em>von dir</em> gewählten Ort (Mac, PC oder externe SSD) und verifiziert jede Datei per Hash vor dem Entfernen." },
        { h: "6. Datenspeicherung", p: "Da die Analyse auf dem Gerät erfolgt und wir keine Server für Nutzerfotos betreiben, behalten wir keine Kopien deiner Fotos. Lokale Analyseergebnisse (Hashes, Scores) werden nur im Sandkasten der App gespeichert und beim Deinstallieren entfernt." },
        { h: "7. Kinder", p: "Die App ist ab 4+ eingestuft und richtet sich nicht an Kinder unter 13. Wir erfassen wissentlich keine Daten von Kindern." },
        { h: "8. Deine Rechte", p: "Da wir deine Fotos nicht auf unseren Servern speichern, kannst du deine Rechte einfach durch Deinstallieren der App ausüben. Fragen zu dieser Richtlinie beantworten wir unten." },
        { h: "9. Änderungen", p: "Wir aktualisieren diese Richtlinie gelegentlich. Wesentliche Änderungen werden über das Datum „Zuletzt aktualisiert“ oben angezeigt." },
        { h: "10. Kontakt", p: 'E-Mail: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Probleme: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "Bei Datenschutzfragen schreib uns oder öffne ein GitHub-Issue — wir antworten meist innerhalb weniger Werktage."
    },
    support: {
      title: "Support",
      contact: 'E-Mail: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Probleme und Feedback: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "Fotozugriff verweigert", a: "Gehe auf deinem iPhone zu <strong>Einstellungen → Keep Shot</strong> und erlaube den Fotozugriff, dann öffne die App erneut." },
        { q: "Speicherplatz nicht ausreichend", a: "Schaffe Platz am Ziel (iPhone oder externes Laufwerk) und versuche die Sicherung erneut." },
        { q: "Sicherung unterbrochen", a: "Bereits übertragene Dateien werden nicht dupliziert. Verbinde erneut und setze fort — die App macht da weiter, wo sie aufhörte." },
        { q: "Verifizierung fehlgeschlagen", a: "Wenn eine Datei die Hash-Verifizierung nicht besteht, wird sie aus deiner Bibliothek <strong>nie gelöscht</strong>. Führe die Sicherung für das Element erneut aus." },
        { q: "Löschen fehlgeschlagen", a: "Einige Fotos konnten nicht gelöscht werden. Warte kurz und versuche es erneut; fehlgeschlagene Elemente bleiben in der Bibliothek." },
        { q: "Wie stelle ich bereinigte Fotos wieder her?", a: "Bereinigte Fotos landen im iPhone-Album <strong>„Kürzlich gelöscht“</strong> und sind innerhalb von 30 Tagen wiederherstellbar." },
        { q: "Wie funktioniert die Sicherung?", a: "Kopieren → Verifizieren (Hash) → Löschen. Die App verifiziert immer erst die Datei, bevor das Original entfernt wird, sodass Fotos nie verloren gehen." }
      ]
    }
  },

  es: {
    name: "Español",
    nav: { home: "Inicio", privacy: "Política de privacidad", support: "Soporte" },
    privacy: {
      title: "Política de privacidad",
      updated: "Última actualización: 13 de septiembre de 2026",
      sections: [
        { h: "1. Resumen", p: "Keep Shot es una app iOS que ayuda a organizar tu fototeca y liberar espacio encontrando fotos duplicadas, similares, borrosas e indeseadas. Tu privacidad es central en su diseño: por defecto, <strong>todo el análisis ocurre en tu dispositivo</strong> y tus fotos <strong>no se suben</strong> a ningún servidor." },
        { h: "2. Información que recopilamos", p: "No requerimos cuenta ni recopilamos información personal como nombre, correo o ubicación. El único dato de usuario al que accede la app es tu <strong>fototeca</strong>, usado solo para su función (duplicados, similares, borrosas…). Estos datos <strong>no se vinculan a ti</strong> y <strong>no se usan para rastrear</strong>." },
        { h: "3. Procesado en el dispositivo", p: "El escaneo, el hash perceptivo, el agrupado, la detección de borrosidad y la clasificación de mejores fotos se ejecutan localmente en tu iPhone. Los archivos se leen solo para analizar; nunca salen del dispositivo salvo que actives explícitamente la IA en la nube (ver abajo)." },
        { h: "4. IA en la nube opcional (Pro)", p: "La IA en la nube es opcional. Al activarla, solo el contenido que elijas analizar se envía por HTTPS cifrado al proveedor de IA <em>que tú</em> configures. No almacenamos tus fotos y la app está diseñada para que las claves API nunca se incrusten en el paquete." },
        { h: "5. Eliminación y copia de seguridad", p: "Al limpiar fotos, pasan al álbum iPhone <strong>“Eliminados recientemente”</strong> y se pueden recuperar durante 30 días — nada se elimina definitivamente sin tu elección explícita. La copia de seguridad opcional copia las fotos a un lugar <em>que tú</em> elijas (Mac, PC o SSD externo) y verifica cada archivo por hash antes de eliminar." },
        { h: "6. Conservación de datos", p: "Como el análisis es en el dispositivo y no operamos servidores de fotos de usuarios, no conservamos copias de tus fotos. Los resultados locales (hashes, puntuaciones) se guardan solo en el sandbox de la app y se eliminan al desinstalar." },
        { h: "7. Niños", p: "La app tiene clasificación 4+ y no está dirigida a menores de 13. No recopilamos datos de niños a sabiendas." },
        { h: "8. Tus derechos", p: "Como no almacenamos tus fotos en nuestros servidores, ejerces tus derechos simplemente desinstalando la app. Para cualquier duda, contáctanos abajo." },
        { h: "9. Cambios", p: "Podemos actualizar esta política ocasionalmente. Los cambios importantes se reflejan en la fecha “Última actualización” de arriba." },
        { h: "10. Contacto", p: 'Correo: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problemas: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "Para dudas de privacidad, escríbenos o abre un GitHub Issue — solemos responder en unos pocos días hábiles."
    },
    support: {
      title: "Soporte",
      contact: 'Correo: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problemas y comentarios: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "Acceso a fotos denegado", a: "Ve a <strong>Ajustes → Keep Shot</strong> en tu iPhone y permite el acceso a fotos, luego abre la app otra vez." },
        { q: "Almacenamiento insuficiente", a: "Libera espacio en el destino (iPhone o disco externo) y vuelve a intentar la copia." },
        { q: "Copia interrumpida", a: "Los archivos ya transferidos no se duplican. Reconecta y retoma — la app continúa donde quedó." },
        { q: "Verificación fallida", a: "Si un archivo falla la verificación por hash, <strong>nunca se elimina</strong> de tu fototeca. Vuelve a hacer la copia de ese elemento." },
        { q: "Eliminación fallida", a: "Algunas fotos no se pudieron eliminar. Espera un momento y reintenta; los elementos fallidos permanecen en tu fototeca." },
        { q: "¿Cómo recupero las fotos limpiadas?", a: "Las fotos limpiadas pasan al álbum iPhone <strong>“Eliminados recientemente”</strong> y se pueden recuperar en 30 días." },
        { q: "¿Cómo funciona la copia de seguridad?", a: "Copiar → Verificar (hash) → Eliminar. La app siempre verifica un archivo antes de quitar el original, así tus fotos nunca se pierden." }
      ]
    }
  },

  it: {
    name: "Italiano",
    nav: { home: "Home", privacy: "Informativa sulla privacy", support: "Supporto" },
    privacy: {
      title: "Informativa sulla privacy",
      updated: "Ultimo aggiornamento: 13 settembre 2026",
      sections: [
        { h: "1. Panoramica", p: "Keep Shot è un’app iOS che aiuta a organizzare la tua fototeca e liberare spazio trovando foto duplicate, simili, sfocate e indesiderate. La privacy è centrale nel design: per impostazione predefinita, <strong>tutta l’analisi avviene sul dispositivo</strong> e le foto <strong>non vengono caricate</strong> su alcun server." },
        { h: "2. Informazioni raccolte", p: "Non richiediamo un account e non raccogliamo dati personali come nome, email o posizione. L’unico dato utente a cui l’app accede è la tua <strong>fototeca</strong>, usata solo per le sue funzioni (duplicati, simili, sfocati…). Questi dati <strong>non sono collegati a te</strong> e <strong>non servono per il tracciamento</strong>." },
        { h: "3. Elaborazione sul dispositivo", p: "Scansione, hash percettivo, raggruppamento, rilevamento sfocature e classifica delle migliori foto girano localmente sul tuo iPhone. I file sono letti solo per analizzarli; non lasciano mai il dispositivo a meno che tu non attivi esplicitamente l’IA cloud (vedi sotto)." },
        { h: "4. IA cloud opzionale (Pro)", p: "L’IA cloud è opzionale. Quando la attivi, solo i contenuti che scegli di analizzare sono inviati via HTTPS crittografato al fornitore di IA <em>che tu</em> configuri. Non memorizziamo le tue foto e l’app è progettata in modo che le chiavi API non siano mai incluse nel bundle." },
        { h: "5. Eliminazione e backup", p: "Quando pulisci le foto, passano nell’album iPhone <strong>“Eliminati di recente”</strong> e restano recuperabili per 30 giorni — non vengono mai eliminate definitivamente senza la tua scelta esplicita. Il backup opzionale copia le foto in una posizione <em>che tu</em> scegli (Mac, PC o SSD esterno) e verifica ogni file con hash prima di rimuoverlo." },
        { h: "6. Conservazione dei dati", p: "Poiché l’analisi avviene sul dispositivo e non gestiamo server per le foto degli utenti, non conserviamo copie delle tue foto. I risultati locali (hash, punteggi) sono salvati solo nel sandbox dell’app e rimossi alla disinstallazione." },
        { h: "7. Minori", p: "L’app è classificata 4+ e non è rivolta a minori di 13 anni. Non raccogliamo consapevolmente dati di minori." },
        { h: "8. I tuoi diritti", p: "Poiché non memorizziamo le tue foto sui nostri server, eserciti i tuoi diritti semplicemente disinstallando l’app. Per dubbi, contattaci qui sotto." },
        { h: "9. Modifiche", p: "Possiamo aggiornare questa informativa di tanto in tanto. Le modifiche importanti sono indicate dalla data “Ultimo aggiornamento” in alto." },
        { h: "10. Contatti", p: 'Email: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problemi: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "Per domande sulla privacy, scrivici o apri un GitHub Issue — rispondiamo di solito entro qualche giorno lavorativo."
    },
    support: {
      title: "Supporto",
      contact: 'Email: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problemi e feedback: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "Accesso alle foto negato", a: "Vai in <strong>Impostazioni → Keep Shot</strong> sul tuo iPhone e consenti l’accesso alle foto, poi riapri l’app." },
        { q: "Spazio insufficiente", a: "Libera spazio sulla destinazione (iPhone o disco esterno) e riprova il backup." },
        { q: "Backup interrotto", a: "I file già trasferiti non vengono duplicati. Riconnetti e riprendi — l’app continua da dove aveva interrotto." },
        { q: "Verifica fallita", a: "Se un file non supera la verifica hash, <strong>non viene mai eliminato</strong> dalla tua fototeca. Rilancia il backup per quell’elemento." },
        { q: "Eliminazione fallita", a: "Alcune foto non sono state eliminate. Attendi un momento e riprova; gli elementi falliti restano nella fototeca." },
        { q: "Come recupero le foto pulite?", a: "Le foto pulite vanno nell’album iPhone <strong>“Eliminati di recente”</strong> e possono essere recuperate entro 30 giorni." },
        { q: "Come funziona il backup?", a: "Copia → Verifica (hash) → Elimina. L’app verifica sempre un file prima di rimuovere l’originale, così le foto non vanno mai perse." }
      ]
    }
  },

  pt: {
    name: "Português",
    nav: { home: "Início", privacy: "Política de privacidade", support: "Suporte" },
    privacy: {
      title: "Política de privacidade",
      updated: "Última atualização: 13 de setembro de 2026",
      sections: [
        { h: "1. Visão geral", p: "Keep Shot é um app iOS que ajuda a organizar sua biblioteca e liberar espaço encontrando fotos duplicadas, similares, embaçadas e indesejadas. Sua privacidade é central no design: por padrão, <strong>toda a análise ocorre no seu dispositivo</strong> e suas fotos <strong>não são enviadas</strong> a nenhum servidor." },
        { h: "2. Informações coletadas", p: "Não exigimos conta nem coletamos informações pessoais como nome, e-mail ou localização. O único dado de usuário que o app acessa é sua <strong>fototeca</strong>, usada apenas para sua função (duplicatas, similares, embaçadas…). Esses dados <strong>não são vinculados a você</strong> e <strong>não servem para rastreamento</strong>." },
        { h: "3. Processamento no dispositivo", p: "A varredura, o hash perceptual, o agrupamento, a detecção de embaçamento e a classificação das melhores fotos rodam localmente no seu iPhone. Os arquivos são lidos apenas para análise; nunca saem do dispositivo a menos que você ative explicitamente a IA na nuvem (ver abaixo)." },
        { h: "4. IA na nuvem opcional (Pro)", p: "A IA na nuvem é opcional. Ao ativá-la, apenas o conteúdo que você escolhe analisar é enviado via HTTPS criptografado ao provedor de IA <em>que você</em> configurar. Não armazenamos suas fotos e o app é projetado para que as chaves de API nunca sejam embutidas no pacote." },
        { h: "5. Exclusão e backup", p: "Ao limpar fotos, elas vão para o álbum iPhone <strong>“Excluídas recentemente”</strong> e ficam recuperáveis por 30 dias — nada é excluído permanentemente sem sua escolha explícita. O backup opcional copia as fotos para um local <em>que você</em> escolher (Mac, PC ou SSD externo) e verifica cada arquivo por hash antes de remover." },
        { h: "6. Retenção de dados", p: "Como a análise é no dispositivo e não operamos servidores de fotos de usuários, não retemos cópias de suas fotos. Os resultados locais (hashes, pontuações) são armazenados apenas no sandbox do app e removidos ao desinstalar." },
        { h: "7. Crianças", p: "O app tem classificação 4+ e não se destina a menores de 13 anos. Não coletamos dados de crianças intencionalmente." },
        { h: "8. Seus direitos", p: "Como não armazenamos suas fotos em nossos servidores, você exerce seus direitos simplesmente desinstalando o app. Dúvidas sobre esta política, contate-nos abaixo." },
        { h: "9. Alterações", p: "Podemos atualizar esta política occasionalmente. Alterações relevantes são refletidas pela data “Última atualização” acima." },
        { h: "10. Contato", p: 'E-mail: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problemas: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>' }
      ],
      contactNote: "Para dúvidas de privacidade, envie e-mail ou abra um GitHub Issue — costumamos responder em alguns dias úteis."
    },
    support: {
      title: "Suporte",
      contact: 'E-mail: <a href="mailto:babanmei666@gmail.com">babanmei666@gmail.com</a><br>Problemas e comentários: <a href="https://github.com/Babanmei/keep_shot/issues">GitHub Issues</a>',
      faqs: [
        { q: "Acesso às fotos negado", a: "Vá em <strong>Ajustes → Keep Shot</strong> no iPhone e permita o acesso às fotos, depois reabra o app." },
        { q: "Armazenamento insuficiente", a: "Libere espaço no destino (iPhone ou disco externo) e tente o backup novamente." },
        { q: "Backup interrompido", a: "Arquivos já transferidos não são duplicados. Reconecte e retome — o app continua de onde parou." },
        { q: "Verificação falhou", a: "Se um arquivo falhar na verificação por hash, ele <strong>nunca é excluído</strong> da sua biblioteca. Refaça o backup desse item." },
        { q: "Exclusão falhou", a: "Algumas fotos não puderam ser excluídas. Aguarde um momento e tente novamente; os itens falhos permanecem na biblioteca." },
        { q: "Como recupero as fotos limpas?", a: "As fotos limpas vão para o álbum iPhone <strong>“Excluídas recentemente”</strong> e podem ser recuperadas em 30 dias." },
        { q: "Como funciona o backup?", a: "Copiar → Verificar (hash) → Excluir. O app sempre verifica um arquivo antes de remover o original, então suas fotos nunca se perdem." }
      ]
    }
  }
};
