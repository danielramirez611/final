@php
$classes = 'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out';

// Additional check for specific options
if (isset($attributes['href'])) {
    $href = $attributes['href'];

    if (strpos($href, 'profile') !== false || strpos($href, 'logout') !== false) {
        $classes .= ' bg-transparent hover:bg-transparent focus:bg-transparent';
    }
}
@endphp

<a {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</a>
