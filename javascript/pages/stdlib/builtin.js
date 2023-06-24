const stdlib_builtin_type_aliasesHTML = `
<div class="sub-sub-title"><x class="inline_code">type byte: u8</x></div>
Is an alias for u8.
It is used, by convention, to distinguish byte values from 8-bit unsigned integer values.

<div class="topic-separator"></div>
<div class="sub-sub-title"><x class="inline_code">type rune: i32</x></div>
Is an alias for i32.
It is used, by convention, to distinguish character values from integer values.`;

const stdlib_builtin_functionsHTML = `
<div class="code">fn out(v)</div>
Prints value to command line.
Uses built-in formatter.

<div class="topic-separator"></div>
<div class="code">fn outln(v)</div>
This function same with the <x class="inline_code">out</x> function.
One difference, prints new line after print.

<div class="topic-separator"></div>
<div class="code">fn panic(error: any)</div>
Panics program with given error data.
The data converting to str and panics with
Error trait compatible structure instance.

<div class="topic-separator"></div>
<div class="code">fn recover(handler: fn(Error))</div>
Recovers errors if exist and call given function with handled error instance.

<div class="topic-separator"></div>
<div class="code">fn new(T): &T</div>
Returns nil reference of data type.

<div class="topic-separator"></div>
<div class="code">fn new(T, mut v: T): &T</div>
Returns reference to new heap-allocation initialized with expression of data type if allocation is success, panics if not.

<div class="topic-separator"></div>
<div class="code">fn drop(ref: mut &T)</div>
Drops allocation and reference counting of reference.

<div class="topic-separator"></div>
<div class="code">fn real(ref: mut &T): bool</div>
Reports reference is not nil.

<div class="topic-separator"></div>
<div class="code">fn make(T, ...V): T</div>
Returns new instance of data type for supported types. <br>
<li>Slices:</li>
<ol>
Allocates slice with dynamic size. <br>
Negative sizes will be accepted as 0-sized.
</ol>

<div class="topic-separator"></div>
<div class="code">fn copy(mut dest: []T, mut src: []T): int</div>
Copies elements of source to destination slice. <br>
Returns number of copied elements. <br>
Source can be any data type that supported by destination type.
<br><br>
Special cases are: <br>
<li><x class="inline_code">copy(dest, src) = length accepts as src.len if dest.len > src.len</x></li>
<li><x class="inline_code">copy(dest, src) = length accepts as dest.len if src.len > dest.len</x></li>

<div class="topic-separator"></div>
<div class="code">fn append(src: []T, mut values: ...T): []T</div>
Creates new required sized slice.
Copies all elements of given source slice and appends given values to end of new slice.
Returns new slice, not changes given source slice.
If you want append values to source slice, assign returned slice.

<div class="topic-separator"></div>
<div class="code">fn clone(expr: T): T</div>
Returns mutable deep-clone of expression.
<br><br>
Allowed types;
<ul>
    <li><x class="inline_code">[]T</x></li>
    <li><x class="inline_code">[...]T</x></li>
    <li><x class="inline_code">[K:V]</x></li>
    <li><x class="inline_code">&T</x></li>
    <li><x class="inline_code">*T:</x></li>
    <li><x class="inline_code">jule:derive Clone</x></li>
</ul>
<div class="info"><a href="https://jule.dev/pages/manual?page=memory-immutability">See more clonning information.</a></div>

`;

const stdlib_builtin_traitsHTML = `
<div class="code">trait Error {
    fn error(self): str
}</div>

This is a error handling trait of standard library. <br>
It is used for error handling and panics.
<br><br>
Example to error handling:<br>
You have a <x class="inline_code">div</x> method have two <x class="inline_code">f64</x> parameter: <x class="inline_code">x</x> and <x class="inline_code">y</x>. <br>
This function returns division of given arguments. <br>
Actually returns: <x class="inline_code">(f64, Error)</x> <br>
The first return value naturally result of computation. <br>
Returns result and empty Error for if the <x class="inline_code">x</x> and <x class="inline_code">y</x> is not equals to <x class="inline_code">0</x>. <br>
If not, returns <x class="inline_code">0</x> and returns <x class="inline_code">Error</x> instance with error message. <br>
You can handle errors like that; <br>
<div class="code">let (result, err) = div(x, y)
if err != nil {
    // If has error...
}</div>
`;

const NAV_stdlib_builtin_type_aliases = document.getElementById("type-aliases");
const NAV_stdlib_builtin_functions    = document.getElementById("functions");
const NAV_stdlib_builtin_traits   = document.getElementById("traits");

const stdlib_builtin_nav = new SideNavigator();
stdlib_builtin_nav.navigations = [
    [NAV_stdlib_builtin_type_aliases, stdlib_builtin_type_aliasesHTML],
    [NAV_stdlib_builtin_functions,    stdlib_builtin_functionsHTML],
    [NAV_stdlib_builtin_traits,       stdlib_builtin_traitsHTML],
];

stdlib_builtin_nav.set_events();
stdlib_builtin_nav.set_content_url();
