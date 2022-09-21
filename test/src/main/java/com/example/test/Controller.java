package com.example.test;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller {
  @GetMapping("/test/{offset}/{limit}")
  public ResponseEntity<List<Map<String, String>>> getData(@PathVariable int offset, @PathVariable int limit) {
    List<Map<String, String>> list = new ArrayList<>();
    int totalCount = 100;
    if (limit > totalCount) {
      limit = totalCount;
    }
    for (int i = offset; i < limit; i++) {
      Map<String, String> map = new HashMap<>();
      map.put("title", String.valueOf(i));
      map.put("writer", "드루이드");
      map.put("22.09.04", "date");
      map.put("content", "내용들이 주르륵");
      if (i == 5) {
        map.put("content",
            "내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵내용들이 주르륵");
      }
      list.add(map);
    }
    return ResponseEntity.ok(list);
  }

  @GetMapping("/test/totalCount")
  public ResponseEntity<Integer> getTotalCount() {
    return ResponseEntity.ok(100);
  }

  @GetMapping("/test/plantitems")
  public ResponseEntity<List<Map<String, String>>> getPlantItems() {
    List<Map<String, String>> list = new ArrayList<>();

    String[] names = { "칼라데아 세토사", "칼라데아 진저", "칼라데아 아마그리스", "칼라데아 퓨전화이트", "칼라데아 세토사", "칼라데아 진저", "칼라데아 아마그리스",
        "칼라데아 퓨전화이트" };

    int[] levels = { 1, 2, 3, 4, 1, 2, 3, 4 };

    for (int i = 0; i < 8; i++) {
      Map<String, String> map = new HashMap<>();
      map.put("cntntsNo", String.valueOf(i + 1));
      map.put("cntntsSj", names[i]);
      map.put("plantLevel", String.valueOf(levels[i]));
      list.add(map);
    }

    return ResponseEntity.ok(list);
  }
}
