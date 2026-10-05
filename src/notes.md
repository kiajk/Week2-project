Derived Data vs State

آیا filteredProducts باید State باشد؟

فرض کنیم این Stateها را داریم:

const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");

می‌توانیم filteredProducts را از روی همین دو مقدار محاسبه کنیم:

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);

پس نیازی نیست filteredProducts را دوباره به عنوان State تعریف کنیم:

const [filteredProducts, setFilteredProducts] = useState([]);

چرا؟

چون filteredProducts یک مقدار Derived Data است؛ یعنی مقدار آن از State یا Props موجود به دست می‌آید.

رابطه به این شکل است:

products + search
       ↓
filteredProducts

اگر products یا search تغییر کند، filteredProducts هم به صورت خودکار در Render بعدی دوباره محاسبه می‌شود.

مشکل State کردن filteredProducts

اگر آن را State کنیم، دو منبع برای نگهداری اطلاعات خواهیم داشت:

products
filteredProducts

ممکن است products تغییر کند ولی filteredProducts به‌موقع به‌روزرسانی نشود و اطلاعات برنامه با هم هماهنگ نباشند.

قانون مهم

اگر یک مقدار را می‌توانیم از State یا Props موجود محاسبه کنیم، معمولاً نباید آن را State کنیم.

به چنین مقداری Derived Data می‌گوییم.

مثال در Product Explorer

در پروژه ما این‌ها Derived Data هستند:

const filteredProducts = ...
const sortedProducts = ...
const categories = ...

چون هر سه از اطلاعاتی که از قبل در State یا Props داریم قابل محاسبه هستند، نیازی به useState ندارند.