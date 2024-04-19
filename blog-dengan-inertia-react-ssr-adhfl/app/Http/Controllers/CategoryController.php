<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function show(Category $category)
    {
        $articles = Article::query()
            ->orWhereBelongsTo($category)
            ->select('title', 'picture', 'slug', 'user_id', 'created_at', 'id')
            ->wherePublished()
            ->latest()
            ->fastPaginate();
        return inertia('Categories/Show', [
            'category' => $category,
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
